import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
  Button, Card, Layout, Page, Form, FormLayout, TextField, Stack,
} from '@shopify/polaris';
import { useForm, Controller } from 'react-hook-form';

import { useProcedureTable } from '../../../hooks';

import { ProcedureTableInput } from '../../../types/types.d';
import { ProcedureList } from '../../Procedure';
import { useGetProcedureTableLazyQuery, useCreateProcedureTableMutation, useUpdateProcedureTableMutation } from '../../../generated/graphql';
import { GET_PROCEDURE_TABLES, GET_PROCEDURE_TABLE } from '../gql';

interface RouteParams {
  id: string
}

const ProcedureTableForm: React.FC = () => {
  const history = useHistory();
  const params = useParams<RouteParams>();

  const {
    control, errors, handleSubmit, reset,
  } = useForm<ProcedureTableInput>();

  const [title, setTitle] = useState('Editar Dados');

  const [getProcedureTable, { data }] = useGetProcedureTableLazyQuery();
  const [createProcedureTable, { loading: createLoading }] = useCreateProcedureTableMutation({
    onCompleted: (newProcedureTable) => {
      if (newProcedureTable) history.push('/procedureTableList');
    },
    refetchQueries: [{ query: GET_PROCEDURE_TABLES }],
  });
  const [updateProcedureTable, { loading: updateLoading }] = useUpdateProcedureTableMutation({
    refetchQueries: [{ query: GET_PROCEDURE_TABLE, variables: { id: params.id } }, { query: GET_PROCEDURE_TABLES }],
  });


  const handleGetProcedureTable = () => {
    if (params.id) {
      getProcedureTable({ variables: { id: params.id } });
    } else {
      setTitle('Nova Tabela de Procedimentos');
    }
  };

  useEffect(handleGetProcedureTable, [params.id]);

  const handleSetFormValues = () => {
    if (data?.getProcedureTable) {
      reset(data?.getProcedureTable);
    }
  };

  useEffect(handleSetFormValues, [data?.getProcedureTable]);

  const onSubmit = (input: ProcedureTableInput) => {
    if (params.id) {
      updateProcedureTable({ variables: { id: params.id, input } });
    } else {
      createProcedureTable({ variables: { input } });
    }
  };

  return (
    <Page
      title={title}
      breadcrumbs={[{
        content: 'Voltar',
        onAction: () => {
          history.push('/procedureTableList');
        },
      }]}
    >
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Stack alignment="trailing" distribution="equalSpacing">
                <FormLayout>
                  <Controller
                    as={(
                      <TextField
                        type="text"
                        label="Nome da Tabela de Procedimentos"
                        error={`${errors.name ? 'Nome obrigatorio' : ''}`}
                        onChange={() => { }}
                      />
                  )}
                    control={control}
                    name="name"
                    rules={{ required: true }}
                  />
                </FormLayout>
                <Button submit primary loading={createLoading || updateLoading}>Salvar</Button>
              </Stack>
            </Form>
          </Card>
          {params.id && (
            <ProcedureList procedureTableId={params.id} />
          )}
        </Layout.Section>

      </Layout>
    </Page>
  );
};

export default ProcedureTableForm;
