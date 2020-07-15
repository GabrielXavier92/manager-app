import React, { useCallback, useState } from 'react';
import {
  Card, Filters, Stack, Button, DataTable,
} from '@shopify/polaris';
import {
  EditMajorMonotone,
} from '@shopify/polaris-icons';
import { useHistory } from 'react-router-dom';
import { useProceduresQuery } from '../../../generated/graphql';

interface IProcedureList {
  procedureTableId: string;
}

interface GetProcedureVars {
  procedureTableId: string,
  take?: number,
  cursor?: string,
  filter?: string
}

const ProcedureList: React.FC<IProcedureList> = ({ procedureTableId }) => {
  const history = useHistory();
  const [queryValue, setQueryValue] = useState('');
  const [taked, setTaked] = useState(10);
  const take = 10;

  const { data, loading, fetchMore } = useProceduresQuery({
    variables: {
      procedureTableId,
      take,
      cursor: '',
      filter: queryValue,
    },
    fetchPolicy: 'cache-and-network',
  });

  const handleFiltersQueryChange = (value: string) => setQueryValue(value);
  const handleQueryValueRemove = useCallback(() => setQueryValue(''), []);
  const handleFiltersClearAll = () => handleQueryValueRemove();

  const handleGetNextProcedures = () => {
    const cursor = data?.procedures?.procedures![data?.procedures?.procedures!.length - 1]!.id;
    fetchMore({
      variables: {
        procedureTableId,
        take,
        cursor,
        filter: queryValue,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        const queryInfo = fetchMoreResult?.procedures?.queryInfo;
        const newProcedures = fetchMoreResult?.procedures?.procedures;
        setTaked(newProcedures!.length);
        if (!newProcedures!.length) return prev;
        return {
          procedures: {
            // eslint-disable-next-line no-underscore-dangle
            __typename: prev.procedures!.__typename,
            procedures: [...prev.procedures!.procedures!, ...newProcedures!],
            queryInfo,
          },
        };
      },
    });
  };

  const ProcedureLine = () => {
    let lines: any[] = [];
    if (data?.procedures?.procedures) {
      lines = data?.procedures?.procedures!.map((procedure) => {
        const editButton = (<Button size="slim" onClick={() => { history.push(`${procedureTableId}/procedure/${procedure?.id}`); }} icon={EditMajorMonotone} plain />);
        return [procedure?.code, procedure?.name, procedure?.specialty?.name, editButton];
      });
    }
    return lines;
  };
  return (
    <>
      <Card
        sectioned
        title="Procedimentos"
        actions={[{
          content: 'Novo procedimento',
          onAction: () => {
            history.push(`/procedureTable/${procedureTableId}/procedure`);
          },
        }]}
      >
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
              'Codigo',
              'Nome',
              'Especialidade',
              '',
            ]}
            rows={ProcedureLine()}
            footerContent={`Mostrando ${data?.procedures?.procedures?.length} de ${data?.procedures?.queryInfo?.ammount}`}
          />
        </Card>
      </Card>
      {take <= taked && take <= data?.procedures?.queryInfo?.ammount! && (
      <>
        <br />
        <Stack distribution="center">
          <Button loading={loading} plain onClick={handleGetNextProcedures}>Carregar Mais</Button>
        </Stack>
        <br />
      </>
      )}
    </>
  );
};

export default ProcedureList;
