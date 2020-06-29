import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
  Button, Card, Layout, Page, Form, FormLayout, TextField, Select, Stack,
} from '@shopify/polaris';
import { useForm, Controller } from 'react-hook-form';

import { useSpecialty } from '../../../hooks';


import { SpecialtyInput } from '../../../types/types.d';

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

  const { useGetSpecialty, useCreateSpecialty, useUpdateSpecialty } = useSpecialty();
  const { createSpecialty } = useCreateSpecialty();
  const { updateSpecialty } = useUpdateSpecialty();
  const { getSpecialty, queryResults } = useGetSpecialty();


  const handleGetSpecialty = () => {
    if (params.id) {
      getSpecialty(params.id);
    } else {
      setTitle('Nova Especialidade');
    }
  };

  useEffect(() => { handleGetSpecialty(); }, [params.id]);

  const handleSetFormValues = () => {
    if (queryResults.data?.getSpecialty) {
      reset(queryResults.data?.getSpecialty);
    }
  };

  useEffect(handleSetFormValues, [queryResults.data]);


  const onSubmit = (specialty: SpecialtyInput) => {
    if (params.id) {
      updateSpecialty(params.id, specialty);
    } else {
      createSpecialty(specialty);
    }
  };

  return (
    <Page title={title}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Layout>
          <Card>
            Form
          </Card>
        </Layout>
      </Form>
    </Page>
  );
};

export default SpecialtyForm;
