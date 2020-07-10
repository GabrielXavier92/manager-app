import React, { useCallback, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import {
  Card, ResourceList, Filters, Pagination, Stack, Button,
} from '@shopify/polaris';
import { useHistory } from 'react-router-dom';
import ProcedureLine from '../ProcedureLine';
import { Procedure, GetProcedures } from '../../../types/types';
import { GET_PROCEDURES } from '../gql';

interface IProcedureList {
  procedureTableId: string;
}

interface GetProcedureVars {
  procedureTableId: string,
  // take: number,
  cursor?: string,
  filter?: string
}

interface GetProcedureData {
  getProcedures: GetProcedures
}

const ProcedureList: React.FC<IProcedureList> = ({ procedureTableId }) => {
  const history = useHistory();
  const [queryValue, setQueryValue] = useState('');
  // const [elements, setElements] = useState(2);

  const { data, fetchMore } = useQuery(GET_PROCEDURES, {
    variables: {
      procedureTableId,
      // take: 2,
      cursor: '',
    },
    // fetchPolicy: 'cache-and-network',
  });

  const handleFiltersQueryChange = (value: string) => setQueryValue(value);
  const handleQueryValueRemove = useCallback(() => setQueryValue(''), []);
  const handleFiltersClearAll = () => handleQueryValueRemove();

  const handleGetNextProcedures = () => {
    fetchMore({
      variables: {
        procedureTableId,
        // take: 2,
        cursor: data?.getProcedures?.cursor,
      },
      updateQuery: (prev, { fetchMoreResult }: { fetchMoreResult?: GetProcedureData }) => {
        if (!fetchMoreResult) return prev;
        const newData = {
          getProcedures: {
            ammount: fetchMoreResult.getProcedures.ammount,
            cursor: fetchMoreResult.getProcedures.cursor,
            procedures: [...prev.getProcedures.procedures!, ...fetchMoreResult.getProcedures?.procedures!],
          },
        };
        console.log(newData);
        return {
          ...newData,
        };
      },
    });
  };

  return (
    <>
      <Card sectioned title="Procedimentos" actions={[{ content: 'Novo procedimento', onAction: () => { history.push('/procedure'); } }]}>
        <Card>
          <ResourceList
            resourceName={{ singular: 'Procedimento', plural: 'Procedimentos' }}
            filterControl={(
              <Filters
                queryValue={queryValue}
                filters={[]}
                onQueryChange={handleFiltersQueryChange}
                onQueryClear={handleQueryValueRemove}
                onClearAll={handleFiltersClearAll}
              />
            )}
            items={data?.getProcedures.procedures ? data?.getProcedures.procedures : []}
            renderItem={(procedure: Procedure) => (
              <ProcedureLine
                id={procedure.id}
                name={procedure.name}
                code={procedure.code}
                value={procedure.value}
                specialty={procedure.specialty}
              />
            )}
          />
        </Card>
        <br />
        <Stack distribution="center">
          <Button onClick={handleGetNextProcedures}>Carregar Mais</Button>
        </Stack>
      </Card>
    </>
  );
};

export default ProcedureList;
