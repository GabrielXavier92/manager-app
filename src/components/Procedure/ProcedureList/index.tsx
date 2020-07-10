import React, { useCallback, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import {
  Card, ResourceList, Filters, Stack, Button,
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
  take?: number,
  cursor?: string,
  filter?: string
}

interface QueryGetProcedure {
  getProcedures: GetProcedures
}

const ProcedureList: React.FC<IProcedureList> = ({ procedureTableId }) => {
  const history = useHistory();
  const [queryValue, setQueryValue] = useState('');

  const { data, fetchMore } = useQuery<QueryGetProcedure, GetProcedureVars>(GET_PROCEDURES, {
    variables: {
      procedureTableId,
      take: 10,
      cursor: '',
      filter: queryValue,
    },
    fetchPolicy: 'cache-and-network',
  });

  const handleFiltersQueryChange = (value: string) => setQueryValue(value);
  const handleQueryValueRemove = useCallback(() => setQueryValue(''), []);
  const handleFiltersClearAll = () => handleQueryValueRemove();

  const handleGetNextProcedures = () => {
    const cursor = data?.getProcedures?.procedures![data?.getProcedures?.procedures!.length - 1]!.id;
    fetchMore({
      variables: {
        procedureTableId,
        take: 10,
        cursor,
        filter: queryValue,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        const queryInfo = fetchMoreResult?.getProcedures?.queryInfo;
        const newProcedures = fetchMoreResult?.getProcedures?.procedures;

        if (!newProcedures!.length) return prev;
        return {
          getProcedures: {
            // eslint-disable-next-line no-underscore-dangle
            __typename: prev.getProcedures.__typename,
            procedures: [...prev.getProcedures.procedures!, ...newProcedures!],
            queryInfo,
          },
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
