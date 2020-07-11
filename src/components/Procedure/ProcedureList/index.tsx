import React, { useCallback, useState } from 'react';
import {
  Card, ResourceList, Filters, Stack, Button, TextContainer,
} from '@shopify/polaris';
import { useHistory } from 'react-router-dom';
import ProcedureLine from '../ProcedureLine';
import { Procedure } from '../../../types/types.d';
import { useGetProceduresQuery } from '../../../generated/graphql';

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

  const { data, fetchMore } = useGetProceduresQuery({
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
    const cursor = data?.getProcedures?.procedures![data?.getProcedures?.procedures!.length - 1]!.id;
    fetchMore({
      variables: {
        procedureTableId,
        take,
        cursor,
        filter: queryValue,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        const queryInfo = fetchMoreResult?.getProcedures?.queryInfo;
        const newProcedures = fetchMoreResult?.getProcedures?.procedures;
        setTaked(newProcedures!.length);
        if (!newProcedures!.length) return prev;
        return {
          getProcedures: {
            // eslint-disable-next-line no-underscore-dangle
            __typename: prev.getProcedures!.__typename,
            procedures: [...prev.getProcedures!.procedures!, ...newProcedures!],
            queryInfo,
          },
        };
      },
    });
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
        {data?.getProcedures?.queryInfo?.ammount && (
          <TextContainer>
            Existem
            {' '}
            {data?.getProcedures?.queryInfo?.ammount}
            {' '}
            procedimentos cadastrados nessa tabela
          </TextContainer>
          )}
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
            items={data?.getProcedures?.procedures ? data?.getProcedures?.procedures : []}
            renderItem={(procedure: Procedure) => (
              <ProcedureLine
                id={procedure.id}
                name={procedure.name}
                code={procedure.code}
                value={procedure.value}
                specialty={procedure.specialty}
                procedureTable={procedure.procedureTable}
              />
            )}
          />
        </Card>
        <br />
        {take <= taked && take <= data?.getProcedures?.queryInfo?.ammount! && (
          <Stack distribution="center">
            <Button onClick={handleGetNextProcedures}>Carregar Mais</Button>
          </Stack>

        )}
      </Card>
    </>
  );
};

export default ProcedureList;
