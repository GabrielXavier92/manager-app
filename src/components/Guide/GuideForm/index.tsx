import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import {
  Button, Card, Layout, Page, Form, FormLayout, TextField, Stack, DataTable,
} from '@shopify/polaris';

import { CirclePlusMinor, DeleteMinor } from '@shopify/polaris-icons';

import { useCreateGuideMutation, useUpdateGuideMutation, useGuideLazyQuery } from '../../../generated/graphql';
import { DoctorSelect } from '../../Doctor';
import { PatientSelect } from '../../Patient';
import { ProcedureTableSelect } from '../../ProcedureTable';
import { ProcedureSelect } from '../../Procedure';

import omitDeep from '../../../utils/omitDeep';

import { transformStringDayInTimestamp, transformTimeStampInTodayDate } from '../../../utils/formatDate';

interface RouteParams {
  id: string
}

interface ISelect {
  id: string;
  name: string;
}

const GuideForm: React.FC = () => {
  const history = useHistory();
  const params = useParams<RouteParams>();

  const {
    control, errors, handleSubmit, getValues, setError, reset, watch,
  } = useForm();

  const watchProcedureTable = watch('procedureTable');

  const [title, setTitle] = useState('Editar Dados');
  const [procedures, setProcedures] = useState([] as any);

  const [procedureTable, setProcedureTable] = useState<ISelect>();
  const handleSetProcedureTable = (value: ISelect) => setProcedureTable(value);

  const [inputProcedureTable, setInputProcedureTable] = useState('');
  const handleSetInputProcedureTable = (value: string) => setInputProcedureTable(value);

  const [getGuide, { data }] = useGuideLazyQuery();

  const [createGuide, { loading: createLoading }] = useCreateGuideMutation({
    onCompleted: (newGuide) => {
      if (newGuide) history.push('/guideList');
    },
  });

  const [updateGuide, { loading: updateLoading }] = useUpdateGuideMutation({
    onCompleted: (newGuide) => {
      if (newGuide) history.push('/guideList');
    },
  });

  const handleGetGuide = () => {
    if (params.id) getGuide({ variables: { id: params.id } });
    else setTitle('Nova guia');
  };

  useEffect(handleGetGuide, [params.id]);

  const handleSetFormValues = () => {
    if (data?.guide) {
      const newData = omitDeep(data?.guide, '__typename');
      console.log(newData);
      reset({
        ...newData,
        start: transformTimeStampInTodayDate(newData.start),
      });

      setProcedures(newData.proceduresGuide);
    }
  };

  useEffect(handleSetFormValues, [data]);

  const onSubmit = (guide: any) => {
    const input = {
      doctor: guide.doctor,
      patient: guide.patient,
      procedureTable: guide.procedureTable,
      start: transformStringDayInTimestamp(guide.start),
      proceduresGuide: procedures,
    };

    console.log(input);
    if (params.id) updateGuide({ variables: { id: params.id, input } });
    else createGuide({ variables: { input } });
  };

  const handleAddProcedure = () => {
    const { procedure, quantity, value } = getValues();

    if (!procedure) setError('procedure', { type: 'manual' });
    else if (!quantity) setError('quantity', { type: 'manual' });
    else if (!value) setError('value', { type: 'manual' });
    else {
      const { id, name } = procedure as any;
      const findProcedure = procedures.find((item: any) => item.procedure.id === id);
      if (!findProcedure) {
        const newProcedure = {
          procedure: {
            id,
            name,
          },
          quantity,
          value,
        };
        setProcedures([...procedures, newProcedure]);
      } else {
        console.log('O procedimento ja foi adicionado');
      }
    }
  };

  const handleRemoveProcedure = (id: number) => {
    const newProcedures = procedures.filter((item: any) => item.procedure.id !== id);
    setProcedures(newProcedures);
  };

  const actionLine = () => [
    <ProcedureSelect
      procedureTableId={getValues('procedureTable').id}
      error={errors.procedure}
      control={control}
      name="procedure"
      label=""
    />,
    <Controller
      as={<TextField type="number" label=" " error={`${errors.quantity ? 'Campo quantidade obrigatório.' : ''}`} onChange={() => { }} />}
      control={control}
      name="quantity"
    />,
    <Controller
      as={<TextField type="number" label=" " error={`${errors.value ? 'Campo valor obrigatório.' : ''}`} onChange={() => { }} />}
      control={control}
      name="value"
    />,
    <Button size="slim" onClick={handleAddProcedure} icon={CirclePlusMinor} plain />,
  ];

  const Procedures = () => {
    let lines: any[] = [];
    if (procedures) {
      lines = procedures.map((item: any, index: number) => {
        const editButton = (<Button size="slim" onClick={() => { handleRemoveProcedure(item.procedure.id); }} icon={DeleteMinor} plain />);
        return [`${index + 1}. ${item.procedure.name}`, item.quantity, item.value, editButton];
      });
    }
    lines = [...lines, actionLine()];
    return lines;
  };

  return (
    <Page
      title={title}
      breadcrumbs={[{
        content: 'Voltar',
        onAction: () => {
          history.push('/guideList');
        },
      }]}
    >

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Layout>
          <Layout.Section>
            <Card sectioned>
              <FormLayout>
                <FormLayout.Group>
                  <DoctorSelect
                    control={control}
                    name="doctor"
                    label="Dentista"
                    rules={{ required: true }}
                    error={errors.doctor}
                  />

                  <PatientSelect
                    control={control}
                    name="patient"
                    label="Paciente"
                    rules={{ required: true }}
                    error={errors.patient}
                  />
                </FormLayout.Group>

                <FormLayout.Group>
                  <Controller
                    as={(
                      <TextField
                        type="date"
                        placeholder="Selecione uma data"
                        label="Data de Atendimento"
                        error={`${errors.start ? 'Data de atendimento obrigatorio' : ''}`}
                        onChange={() => { }}
                      />
                )}
                    control={control}
                    rules={{ required: true }}
                    name="start"
                  />
                  <span />
                </FormLayout.Group>

                <FormLayout.Group>
                  <ProcedureTableSelect
                    setValue={() => {}}
                    inputValue={inputProcedureTable}
                    setInputValue={handleSetInputProcedureTable}
                    name="procedureTable"
                    label="Tabela de procedimentos"
                    rules={{ required: true }}
                    error={errors.procedureTable}
                    control={control}
                  />
                  <span />
                </FormLayout.Group>
              </FormLayout>

              <br />
              {watchProcedureTable
          && (
          <Card>
            <DataTable
              columnContentTypes={[
                'text',
                'text',
                'text',
                'text',
              ]}
              headings={[
                'Procedimento',
                'Quantidade',
                'Valor R$',
                '',
              ]}
              rows={Procedures()}
            />
          </Card>
          )}
            </Card>
          </Layout.Section>
          <Layout.Section>
            <Stack distribution="equalSpacing">
              <Button loading={createLoading || updateLoading} onClick={() => { history.push('/guideList'); }}>Cancelar</Button>
              <Button submit primary loading={createLoading || updateLoading}>Salvar</Button>
            </Stack>
          </Layout.Section>
        </Layout>
      </Form>
    </Page>
  );
};

export default GuideForm;
