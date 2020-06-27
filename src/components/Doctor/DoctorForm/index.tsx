import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  Button, Card, Layout, Page, Form, FormLayout, TextField, Select, Stack,
} from '@shopify/polaris';

import history from '../../../utils/history';

import DatePicker from '../../DatePicker';

import { DoctorInput } from '../../../types/types.d';

const DoctorForm: React.FC = () => {
  const {
    control, errors, getValues, handleSubmit, setValue,
  } = useForm<DoctorInput>();

  const onSubmit = () => {
    console.log(getValues());
  };

  return (
    <Page title="Novo profissional">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Layout>
          <Layout.AnnotatedSection
            title="Dados pessoais"
            description="Esses sao os dados pessoais do profissional"
          >
            <Card sectioned>
              <FormLayout>
                <Controller
                  as={
                    <TextField type="text" label="Nome" error={`${errors.name ? 'Nome obrigatorio' : ''}`} onChange={() => { }} />
                  }
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
                <DatePicker control={control} setValue={setValue} name="birth" label="Data de Aniversario" />

                <Controller
                  as={
                    <TextField type="text" label="Email" onChange={() => { }} />
                  }
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
                  as={
                    <TextField type="text" label="Registro" onChange={() => { }} />
                  }
                  control={control}
                  name="register"
                />
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
