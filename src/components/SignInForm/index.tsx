import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import {
  FormLayout, TextField, Button, ButtonGroup, Form,
} from '@shopify/polaris';

const SIGN_IN = gql`
mutation SignIn($input: LoginUserInput!){
  signIn(input: $input) {
    token
  }
}
`;


const SignInForm: React.FC = () => {
  const { control, handleSubmit, errors } = useForm();

  const [signIn] = useMutation(SIGN_IN);

  const onSubmit = (input: any) => {
    signIn({
      variables: {
        input,
      },
    });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
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
  );
};

export default SignInForm;
