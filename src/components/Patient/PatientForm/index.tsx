import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import {
  Button, Card, Layout, Page, Form, FormLayout, TextField, Select, Stack,
} from '@shopify/polaris';

import { transformTimeStampInTodayDate, transformStringDayInTimestamp } from '../../../utils/formatDate';

import {
  PatientInput, usePatientLazyQuery, useCreatePatientMutation, useUpdatePatientMutation,
} from '../../../generated/graphql';

import { GET_PATIENT, GET_PATIENTS } from '../gql';

interface RouteParams {
  id: string
}

interface ISelect {
  id: string;
  name: string;
}

const DoctorForm: React.FC = () => {
  const history = useHistory();
  const params = useParams<RouteParams>();

  const {
    control, errors, handleSubmit, reset,
  } = useForm <PatientInput>();

  const [title, setTitle] = useState('Editar Dados');

  const [getPatient, { data }] = usePatientLazyQuery();

  const [createPatient, { loading: createLoading }] = useCreatePatientMutation({
    onCompleted: (newPatient) => {
      if (newPatient) history.push('/patientList');
    },
  });

  const [updatePatient, { loading: updateLoading }] = useUpdatePatientMutation({
    onCompleted: (newPatient) => {
      if (newPatient) history.push('/patientList');
    },
  });

  const handleGetPatient = () => {
    if (params.id) getPatient({ variables: { id: params.id } });
    else setTitle('Novo Paciente');
  };

  useEffect(handleGetPatient, [params.id]);

  const handleSetFormValues = () => {
    if (data?.patient) {
      reset({
        ...data.patient,
        birth: transformTimeStampInTodayDate(data.patient.birth!),
      });
    }
  };

  useEffect(handleSetFormValues, [data]);

  const onSubmit = (patient: PatientInput) => {
    const { birth } = patient;
    const input = {
      ...patient,
      birth: birth ? transformStringDayInTimestamp(birth) : birth,
    };
    if (params.id) {
      updatePatient({ variables: { id: params.id, input } });
    } else {
      createPatient({
        variables: {
          input,
        },
      });
    }
  };

  return (
    <Page
      title={title}
      breadcrumbs={[{
        content: 'Voltar',
        onAction: () => {
          history.push('/patientList');
        },
      }]}
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Layout>
          <Layout.AnnotatedSection
            title="Dados pessoais"
            description="Esses são os dados pessoais do seu paciente"
          >
            <Card sectioned>
              <FormLayout>
                <Controller
                  as={<TextField type="text" label="Nome" error={`${errors.name ? 'Nome obrigatorio' : ''}`} onChange={() => { }} />}
                  control={control}
                  name="name"
                  rules={{ required: true }}
                />
                <Controller
                  as={(
                    <Select
                      label="Genero"
                      options={[
                        { label: 'Masculinio', value: 'MASCULINO' },
                        { label: 'Feminino', value: 'FEMININO' },
                      ]}
                      onChange={() => { }}
                    />
                  )}
                  control={control}
                  name="gender"
                  defaultValue="MASCULINO"
                />

                <Controller
                  as={(
                    <TextField type="date" placeholder="Selecione uma data" label="Data de aniversario" onChange={() => { }} />
                  )}
                  control={control}
                  name="birth"
                />

                <Controller
                  as={<TextField type="text" label="Email" onChange={() => { }} />}
                  control={control}
                  name="email"
                />

              </FormLayout>
            </Card>
          </Layout.AnnotatedSection>

          <Layout.AnnotatedSection
            title="Endereço"
            description="Registre aqui os dados residenciais do seu paciente"
          >
            <Card sectioned>
              <FormLayout>
                <FormLayout.Group>
                  <Controller
                    as={<TextField type="text" label="País" onChange={() => { }} />}
                    control={control}
                    name="country"
                  />
                  <Controller
                    as={<TextField type="text" label="CEP" onChange={() => { }} />}
                    control={control}
                    name="cep"
                  />
                </FormLayout.Group>

                <FormLayout.Group>
                  <Controller
                    as={<TextField type="text" label="Estado" onChange={() => { }} />}
                    control={control}
                    name="state"
                  />
                  <Controller
                    as={<TextField type="text" label="Cidade" onChange={() => { }} />}
                    control={control}
                    name="city"
                  />

                </FormLayout.Group>
                <Controller
                  as={<TextField type="text" label="Endereço" onChange={() => { }} />}
                  control={control}
                  name="street"
                />
                <FormLayout.Group>

                  <Controller
                    as={<TextField type="text" label="Bairro" onChange={() => { }} />}
                    control={control}
                    name="neighborhood"
                  />
                  <Controller
                    as={<TextField type="text" label="Complemento" onChange={() => { }} />}
                    control={control}
                    name="complement"
                  />
                </FormLayout.Group>
              </FormLayout>
            </Card>
          </Layout.AnnotatedSection>

          <Layout.Section>
            <Stack distribution="equalSpacing">
              <Button loading={createLoading || updateLoading} onClick={() => { history.push('/patientList'); }}>Cancelar</Button>
              <Button submit primary loading={createLoading || updateLoading}>Salvar</Button>
            </Stack>
          </Layout.Section>

        </Layout>
      </Form>
    </Page>
  );
};

export default DoctorForm;
