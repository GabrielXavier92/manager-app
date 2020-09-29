import React, { useState, useCallback } from 'react';
import {
  Card, Page, Layout, Filters, DataTable, Button, Stack, Badge,
} from '@shopify/polaris';
import {
  EditMajorMonotone,
} from '@shopify/polaris-icons';
import { useHistory } from 'react-router-dom';
import { useGuidesQuery } from '../../../generated/graphql';
import { transformTimeStampInTodayDateBr } from '../../../utils/formatDate';

const GuideList: React.FC = () => {
  const history = useHistory();
  const [queryValue, setQueryValue] = useState('');
  const [taked, setTaked] = useState(10);
  const take = 10;

  const handleFiltersQueryChange = (value: string) => setQueryValue(value);
  const handleQueryValueRemove = useCallback(() => setQueryValue(''), []);
  const handleFiltersClearAll = () => handleQueryValueRemove();

  const { data, loading, fetchMore } = useGuidesQuery({
    variables: {
      take,
      cursor: '',
      filter: queryValue,
    },
    fetchPolicy: 'cache-and-network',
  });

  const handleGetNextGuides = () => {
    const cursor = data?.guides?.guides![data?.guides?.guides!.length - 1]!.id;
    fetchMore({
      variables: {
        take,
        cursor,
        filter: queryValue,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        console.log(fetchMoreResult);
        const queryInfo = fetchMoreResult?.guides?.queryInfo;
        const newGuides = fetchMoreResult?.guides?.guides;
        setTaked(newGuides!.length);
        if (!newGuides!.length) return prev;
        return {
          guides: {
            // eslint-disable-next-line no-underscore-dangle
            __typename: prev.guides!.__typename,
            guides: [...prev.guides!.guides!, ...newGuides!],
            queryInfo,
          },
        };
      },
    });
  };

  const GuideLine = () => {
    let lines: any[] = [];
    if (data?.guides?.guides) {
      lines = data?.guides?.guides!.map((guide) => {
        const editButton = (<Button size="slim" onClick={() => { history.push(`guide/${guide?.id}`); }} icon={EditMajorMonotone} plain />);
        const date = transformTimeStampInTodayDateBr(guide?.start!);
        const status = guide?.isClosed ? <Badge status="success">Guia Fechada</Badge> : <Badge status="attention">Guia Aberta</Badge>;
        return [guide?.patient?.name, guide?.doctor?.name, status, date, editButton];
      });
    }
    return lines;
  };

  return (
    <Page
      title="Guias de Atendimento"
      primaryAction={{
        content: 'Nova Guia',
        onAction: () => { history.push('/guide'); },
      }}
    >
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <Card>
              <Filters
                queryValue={queryValue}
                filters={[]}
                onQueryChange={handleFiltersQueryChange}
                onQueryClear={handleQueryValueRemove}
                onClearAll={handleFiltersClearAll}
              />
            </Card>
            <Card>
              <DataTable
                columnContentTypes={[
                  'text',
                  'text',
                  'text',
                  'text',
                  'text',
                  'text',
                ]}
                headings={[
                  'Paciente',
                  'Profissional',
                  'Status',
                  'Data',
                  '',
                ]}
                rows={GuideLine()}
                footerContent={`Mostrando ${data?.guides?.guides?.length} de ${data?.guides?.queryInfo?.ammount}`}
              />
            </Card>
          </Card>
          {take <= taked && take <= data?.guides?.queryInfo?.ammount! && (
            <>
              <br />
              <Stack distribution="center">
                <Button loading={loading} plain onClick={handleGetNextGuides}>Carregar Mais</Button>
              </Stack>
              <br />
            </>
          )}
        </Layout.Section>
      </Layout>

    </Page>
  );
};

export default GuideList;
