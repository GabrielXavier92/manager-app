import React from 'react';
import { useForm, Controller } from 'react-hook-form';

import {
  FormLayout, TextField, Card, Page, Button, ButtonGroup, Form,
} from '@shopify/polaris';


const SignInForm: React.FC = () => {
  const { control, handleSubmit, errors } = useForm();


  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <Page singleColumn title="Entrar">
      <Card sectioned>
        <Form onSubmit={handleSubmit(onSubmit)} preventDefault>
          <FormLayout>
            <Controller
              as={
                <TextField type="email" label="Email" error={`${errors.email ? 'Email obrigatorio' : ''}`} onChange={() => {}} />
              }
              control={control}
              name="email"
              rules={{ required: true }}
            />

            <Controller
              as={
                <TextField type="password" label="Senha" error={`${errors.password ? 'Senha é obrigatorio, minimo 6 caracters' : ''}`} onChange={() => { }} />
              }
              control={control}
              name="password"
              rules={{ required: true, minLength: 6 }}

            />
            <ButtonGroup>
              <Button submit>Entrar</Button>
              <Button>Nova conta</Button>
            </ButtonGroup>
            <Button plain>Esqueci minha senha</Button>
          </FormLayout>
        </Form>
      </Card>
    </Page>
  );
};

export default SignInForm;
