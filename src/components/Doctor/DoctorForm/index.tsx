import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import {
  Button, Card, Layout, Page, Form, FormLayout, TextField, Select, Stack,
} from '@shopify/polaris';

import { useDoctor } from '../../../hooks';


import { transformTimeStampInTodayDate } from '../../../utils/formatDate';

import { DoctorInput } from '../../../types/types.d';

interface RouteParams {
  id: string
}

const DoctorForm: React.FC = () => {
  const history = useHistory();
  const params = useParams<RouteParams>();

  const [title, setTitle] = useState('Editar Dados');

  const {
    control, errors, handleSubmit, reset,
  } = useForm <DoctorInput>();
  const { useCreateDoctor, useUpdateDoctor, useGetDoctor } = useDoctor();

  const { createDoctor } = useCreateDoctor();
  const { updateDoctor } = useUpdateDoctor();
  const { getDoctor, queryResults } = useGetDoctor();

  const handleGetDoctor = () => {
    if (params.id) {
      getDoctor(params.id);
    } else {
      setTitle('Novo Profissional');
    }
  };

  useEffect(() => { handleGetDoctor(); }, [params.id]);

  const handleSetFormValues = () => {
    if (queryResults.data?.getDoctor) {
      console.log(queryResults.data.getDoctor.birth!);
      console.log(transformTimeStampInTodayDate(queryResults.data.getDoctor.birth!));
      reset({
        ...queryResults.data.getDoctor,
        birth: transformTimeStampInTodayDate(queryResults.data.getDoctor.birth!),
      });
    }
  };

  useEffect(handleSetFormValues, [queryResults.data]);

  const onSubmit = (doctor: DoctorInput) => {
    console.log(doctor.birth);
    if (params.id) {
      updateDoctor(params.id, doctor);
    } else {
      createDoctor(doctor);
    }
  };

  return (
    <Page title={title}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Layout>
          <Layout.AnnotatedSection
            title="Dados pessoais"
            description="Esses sao os dados pessoais do profissional"
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
            title="Dados profissionais"
            description="Esses sao os dados profissionais do profissional"
          >
            <Card sectioned>
              <FormLayout>
                <Controller
                  as={<TextField type="text" label="Registro" onChange={() => { }} />}
                  control={control}
                  name="register"
                />
              </FormLayout>
            </Card>
          </Layout.AnnotatedSection>

          <Layout.AnnotatedSection
            title="Endereço"
            description="Registre aqui os dados residenciais do seu profissional"
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
              <Button destructive onClick={() => { history.push('/dashboard/doctorlist'); }}>Cancelar</Button>
              <Button submit primary>Salvar</Button>
            </Stack>
          </Layout.Section>

        </Layout>
      </Form>
    </Page>
  );
};

export default DoctorForm;
