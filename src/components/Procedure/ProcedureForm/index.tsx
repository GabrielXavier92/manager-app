import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
  Button, Card, TextField, Stack, Page, Form, Layout, FormLayout, Select,
} from '@shopify/polaris';
import { useForm, Controller } from 'react-hook-form';

import { ProcedureInput, Specialty } from '../../../types/types.d';
import {
  useGetProcedureLazyQuery, useCreateProcedureMutation, useUpdateProcedureMutation, useGetSpecialtiesQuery,
} from '../../../generated/graphql';

interface RouteParams {
  id: string;
  procedureTableId: string;
}

interface ISelect {
  value: string;
  label: string;
}

const ProcedureForm: React.FC = () => {
  const history = useHistory();
  const params = useParams<RouteParams>();

  const [title, setTitle] = useState('Editar Dados');
  const [specialties, setSpecialties] = useState<Array<ISelect>>([]);

  const {
    control, errors, handleSubmit, reset,
  } = useForm<ProcedureInput>();

  const { data: fetchSpecialties } = useGetSpecialtiesQuery();
  const [getProcedure, { data }] = useGetProcedureLazyQuery();
  const [createProcedure, { loading: createLoading }] = useCreateProcedureMutation({
    onCompleted: (newProcedure) => {
      if (newProcedure) history.push(`/procedureTable/${params.procedureTableId}`);
    },
  });
  const [updateProcedure, { loading: updateLoading }] = useUpdateProcedureMutation({
    onCompleted: (newProcedure) => {
      if (newProcedure) history.push(`/procedureTable/${params.procedureTableId}`);
    },
  });

  const handleGetProcedure = () => {
    if (params.id) {
      getProcedure({ variables: { id: params.id } });
    } else {
      setTitle('Novo procedimento');
    }
  };

  useEffect(handleGetProcedure, [params.id]);

  const handleSetFormValues = () => {
    if (data?.getProcedure) {
      const procedure = {
        ...data.getProcedure,
        specialtyId: data?.getProcedure?.specialty!.id,
      };
      reset(procedure);
    }
  };

  useEffect(handleSetFormValues, [data]);

  const onSubmit = (input: ProcedureInput) => {
    const newProcedure = {
      ...input,
      procedureTableId: params.procedureTableId,
    };
    if (params.id) {
      updateProcedure({ variables: { id: params.id, input: newProcedure } });
    } else {
      createProcedure({ variables: { input: newProcedure } });
    }
  };

  const handleSetOptions = () => {
    if (fetchSpecialties?.getSpecialties) {
      const selectSpecialties = fetchSpecialties?.getSpecialties!.map((specialty: Specialty) => ({
        value: specialty.id,
        label: specialty.name,
      }));
      setSpecialties(selectSpecialties);
    }
  };

  useEffect(handleSetOptions, [fetchSpecialties?.getSpecialties]);


  return (
    <Page
      title={title}
      breadcrumbs={[{
        content: 'Voltar',
        onAction: () => {
          history.push('/specialtylist');
        },
      }]}
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Layout>
          <Layout.Section>
            <Card sectioned>
              <FormLayout>
                <Controller
                  as={(
                    <TextField
                      type="text"
                      label="Nome do procedimento"
                      error={`${errors.name ? 'Nome obrigatorio' : ''}`}
                      onChange={() => { }}
                    />
                  )}
                  control={control}
                  name="name"
                  rules={{ required: true }}
                />
                <Controller
                  as={(
                    <TextField
                      type="text"
                      label="Codigo"
                      onChange={() => { }}
                    />
                  )}
                  control={control}
                  name="code"
                />
                <Controller
                  as={(
                    <Select
                      label="Especialidade"
                      options={specialties}
                      error={`${errors.specialtyId ? 'Especialidade obrigatorio' : ''}`}
                      placeholder="Selecione uma especialidade"
                      onChange={() => { }}
                    />
                  )}
                  control={control}
                  name="specialtyId"
                  rules={{ required: true }}
                />
                <Controller
                  as={(
                    <TextField
                      type="text"
                      label="Valor"
                      onChange={() => { }}
                    />
                  )}
                  control={control}
                  name="value"
                />
              </FormLayout>
            </Card>
          </Layout.Section>
          <Layout.Section>
            <Stack distribution="equalSpacing">
              <Button loading={createLoading || updateLoading} onClick={() => { history.push(`/procedureTable/${params.procedureTableId}`); }}>Cancelar</Button>
              <Button loading={createLoading || updateLoading} submit primary>Salvar</Button>
            </Stack>
          </Layout.Section>
        </Layout>
      </Form>
    </Page>
  );
};

export default ProcedureForm;
