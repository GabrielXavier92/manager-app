import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
  Button, Card, Layout, Page, Form, FormLayout, TextField, Stack,
} from '@shopify/polaris';
import { useForm, Controller } from 'react-hook-form';

import { useProcedureTable } from '../../../hooks';

import { ProcedureTableInput } from '../../../types/types.d';
import { ProcedureList } from '../../Procedure';

interface RouteParams {
  id: string
}

const ProcedureTableForm: React.FC = () => {
  const history = useHistory();
  const params = useParams<RouteParams>();

  const [title, setTitle] = useState('Editar Dados');

  const {
    control, errors, handleSubmit, reset,
  } = useForm<ProcedureTableInput>();

  const { useGetProcedureTable, useCreateProcedureTable, useUpdateProcedureTable } = useProcedureTable();
  const { createProcedureTable } = useCreateProcedureTable();
  const { updateProcedureTable } = useUpdateProcedureTable();
  const { getProcedureTable, queryResults } = useGetProcedureTable();


  const handleGetProcedureTable = () => {
    if (params.id) {
      getProcedureTable(params.id);
    } else {
      setTitle('Nova Tabela de Procedimentos');
    }
  };

  useEffect(handleGetProcedureTable, [params.id]);

  const handleSetFormValues = () => {
    if (queryResults.data?.getProcedureTable) {
      reset(queryResults.data?.getProcedureTable);
    }
  };

  useEffect(handleSetFormValues, [queryResults.data]);

  const onSubmit = (procedureTable: ProcedureTableInput) => {
    if (params.id) {
      updateProcedureTable(params.id, procedureTable);
    } else {
      createProcedureTable(procedureTable);
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
                <Button submit primary>Salvar</Button>
              </Stack>
            </Form>
          </Card>
          <ProcedureList procedureTableId={params.id} />
        </Layout.Section>

        {/* <Layout.Section>
              <Button destructive onClick={() => { history.push('/procedureTableList'); }}>Cancelar</Button>
            </Layout.Section> */}

      </Layout>
    </Page>
  );
};

export default ProcedureTableForm;
