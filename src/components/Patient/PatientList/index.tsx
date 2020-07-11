import React, { useCallback, useState } from 'react';
import {
  Card, Filters, ResourceList, Page, Layout, Stack, Button,
} from '@shopify/polaris';

import { useHistory } from 'react-router-dom';

import PatientLine from '../PatientLine';

import { Patient, usePatientsQuery } from '../../../generated/graphql';

const PatientList: React.FC = () => {
  const history = useHistory();

  const [queryValue, setQueryValue] = useState('');
  const [taked, setTaked] = useState(10);
  const take = 10;

  const { data, loading, fetchMore } = usePatientsQuery({
    variables: {
      take,
      cursor: '',
      filter: queryValue,
    },
    fetchPolicy: 'cache-and-network',
  });

  const handleFiltersQueryChange = (value: string) => setQueryValue(value);
  const handleQueryValueRemove = useCallback(() => setQueryValue(''), []);
  const handleFiltersClearAll = () => handleQueryValueRemove();

  const handleGetNextPatients = () => {
    const cursor = data?.patients?.patients![data?.patients?.patients!.length - 1]!.id;
    fetchMore({
      variables: {
        take,
        cursor,
        filter: queryValue,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        const queryInfo = fetchMoreResult?.patients?.queryInfo;
        const newPatients = fetchMoreResult?.patients?.patients;
        setTaked(newPatients!.length);
        if (!newPatients!.length) return prev;
        return {
          patients: {
            // eslint-disable-next-line no-underscore-dangle
            __typename: prev.patients!.__typename,
            procedures: [...prev.patients!.patients!, ...newPatients!],
            queryInfo,
          },
        };
      },
    });
  };

  return (
    <Page
      title="Pacientes"
      // secondaryActions={[
      //   { content: 'Importar', icon: ImportMinor },
      // ]}
      primaryAction={{
        content: 'Novo paciente',
        onAction: () => { history.push('/patient'); },
      }}
    >
      <Layout>
        <Layout.Section>
          <Card>
            <ResourceList
              resourceName={{ singular: 'Paciente', plural: 'Pacientes' }}
              filterControl={(
                <Filters
                  queryValue={queryValue}
                  filters={[]}
                  onQueryChange={handleFiltersQueryChange}
                  onQueryClear={handleQueryValueRemove}
                  onClearAll={handleFiltersClearAll}
                />
              )}
              loading={loading}
              items={data?.patients?.patients ? data.patients.patients : []}
              renderItem={(patient: Patient) => (<PatientLine id={patient.id} name={patient.name} gender={patient.gender} birth={patient.birth} />)}
            />
            {take <= taked && take <= data?.patients?.queryInfo?.ammount! && (
              <>
                <br />
                <Stack distribution="center">
                  <Button onClick={handleGetNextPatients}>Carregar Mais</Button>
                </Stack>
              </>
            )}
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default PatientList;
