import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
  Button, Card, Layout, Page, Form, FormLayout, TextField, Stack,
} from '@shopify/polaris';
import { useForm, Controller } from 'react-hook-form';

import { useSpecialty } from '../../../hooks';

import { SpecialtyInput } from '../../../types/types.d';
import { useGetSpecialtyLazyQuery, useCreateSpecialtyMutation, useUpdateSpecialtyMutation } from '../../../generated/graphql';
import { GET_SPECIALTIES } from '../gql';

interface RouteParams {
  id: string
}

const SpecialtyForm: React.FC = () => {
  const history = useHistory();
  const params = useParams<RouteParams>();

  const [title, setTitle] = useState('Editar Dados');

  const {
    control, errors, handleSubmit, reset,
  } = useForm<SpecialtyInput>();

  const [getSpecialty, { data }] = useGetSpecialtyLazyQuery();
  const [createSpecialty, { loading: createLoading }] = useCreateSpecialtyMutation({
    onCompleted: (newSpecialty) => {
      if (newSpecialty) history.push('/specialtyList');
    },
    refetchQueries: [{ query: GET_SPECIALTIES }],
  });
  const [updateSpecialty, { loading: updateLoading }] = useUpdateSpecialtyMutation({
    onCompleted: (newSpecialty) => {
      if (newSpecialty) history.push('/specialtyList');
    },
  });


  const handleGetSpecialty = () => {
    if (params.id) {
      getSpecialty({ variables: { id: params.id } });
    } else {
      setTitle('Nova Especialidade');
    }
  };

  useEffect(handleGetSpecialty, [params.id]);

  const handleSetFormValues = () => {
    if (data?.getSpecialty) {
      reset(data?.getSpecialty);
    }
  };

  useEffect(handleSetFormValues, [data]);

  const onSubmit = (input: SpecialtyInput) => {
    if (params.id) {
      updateSpecialty({ variables: { id: params.id, input } });
    } else {
      createSpecialty({ variables: { input } });
    }
  };

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
                      label="Nome da Especialidade"
                      error={`${errors.name ? 'Nome obrigatorio' : ''}`}
                      onChange={() => { }}
                    />
                  )}
                  control={control}
                  name="name"
                  rules={{ required: true }}
                />
              </FormLayout>
            </Card>
          </Layout.Section>

          <Layout.Section>
            <Stack distribution="equalSpacing">
              <Button loading={createLoading || updateLoading} onClick={() => { history.push('/specialtylist'); }}>Cancelar</Button>
              <Button loading={createLoading || updateLoading} submit primary>Salvar</Button>
            </Stack>
          </Layout.Section>

        </Layout>
      </Form>
    </Page>
  );
};

export default SpecialtyForm;
