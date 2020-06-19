import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  FormLayout, TextField, Button, ButtonGroup, Form,
} from '@shopify/polaris';
import { useSignInMutation } from '../../hooks';
import { LoginUserInput } from '../../types/types.d';


const SignInForm: React.FC = () => {
  const { control, handleSubmit, errors } = useForm<LoginUserInput>();
  const { signIn } = useSignInMutation();

  const onSubmit = (input: LoginUserInput) => {
    const { email, password } = input;
    signIn(email, password);
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
