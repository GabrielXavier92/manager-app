import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import {
  Button, Card, Layout, Page, Form, FormLayout, TextField, Select, Stack,
} from '@shopify/polaris';

import ReactSelect from 'react-select';

import { transformTimeStampInTodayDate, transformStringDayInTimestamp } from '../../../utils/formatDate';

import {
  useCreateDoctorMutation, useGetDoctorLazyQuery, useUptadateDoctorMutation, useGetSpecialtiesQuery, DoctorInput, Specialty,
} from '../../../generated/graphql';
import { GET_DOCTORS, GET_DOCTOR } from '../gql';

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
  } = useForm <DoctorInput>();

  const [title, setTitle] = useState('Editar Dados');
  const [specialties, setSpecialties] = useState<Array<ISelect>>([]);

  const { data: fetchSpecialties } = useGetSpecialtiesQuery();
  const [getDoctor, { data }] = useGetDoctorLazyQuery();
  const [createDoctor, { loading: createLoading }] = useCreateDoctorMutation({
    onCompleted: (newDoctor) => {
      if (newDoctor) history.push('/doctorList');
    },
    refetchQueries: [{ query: GET_DOCTORS }],
  });

  const [updateDoctor, { loading: updateLoading }] = useUptadateDoctorMutation({
    onCompleted: (newDoctor) => {
      if (newDoctor) history.push('/doctorList');
    },
    refetchQueries: [{ query: GET_DOCTOR, variables: { id: params.id } }],
  });

  const handleGetDoctor = () => {
    if (params.id) {
      getDoctor({ variables: { id: params.id } });
    } else {
      setTitle('Novo Profissional');
    }
  };

  useEffect(handleGetDoctor, [params.id]);

  const handleSetFormValues = () => {
    if (data?.getDoctor) {
      reset({
        ...data.getDoctor,
        birth: transformTimeStampInTodayDate(data.getDoctor.birth!),
        specialties: data?.getDoctor.specialties!.map((specialty) => ({ id: specialty!.id, name: specialty!.name })),
      });
    }
  };

  useEffect(handleSetFormValues, [data]);

  const handleSetOptions = () => {
    if (fetchSpecialties?.getSpecialties) {
      setSpecialties(fetchSpecialties?.getSpecialties.map((specialty) => ({ id: specialty.id, name: specialty.name })));
    }
  };

  useEffect(handleSetOptions, [fetchSpecialties?.getSpecialties]);

  const onSubmit = (doctor: DoctorInput) => {
    const { birth } = doctor;
    const input = {
      ...doctor,
      birth: birth ? transformStringDayInTimestamp(birth) : birth,
    };
    if (params.id) {
      updateDoctor({ variables: { id: params.id, input } });
    } else {
      createDoctor({
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
          history.push('/doctorList');
        },
      }]}
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Layout>
          <Layout.AnnotatedSection
            title="Dados pessoais"
            description="Esses são os dados pessoais do profissional"
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
            description="Esses são os dados profissionais do profissional"
          >
            <Card sectioned>
              <FormLayout>
                <Controller
                  as={<TextField type="text" label="Registro" onChange={() => { }} />}
                  control={control}
                  name="register"
                />

                <Controller
                  as={(
                    <ReactSelect
                      getOptionValue={(option) => option.id}
                      getOptionLabel={(option) => option.name}
                      options={specialties}
                      isMulti
                      className="basic-multi-select"
                      classNamePrefix="select"
                    />
                  )}
                  control={control}
                  name="specialties"
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
              <Button loading={createLoading || updateLoading} onClick={() => { history.push('/doctorList'); }}>Cancelar</Button>
              <Button submit primary loading={createLoading || updateLoading}>Salvar</Button>
            </Stack>
          </Layout.Section>

        </Layout>
      </Form>
    </Page>
  );
};

export default DoctorForm;
