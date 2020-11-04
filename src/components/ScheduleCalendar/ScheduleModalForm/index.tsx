import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';

import {
  Modal, FormLayout, TextField, Stack, Button, Form, Select,
} from '@shopify/polaris';
import {
  ScheduleInput, useCreateScheduleMutation, Schedule, useUpdateScheduleMutation,
} from '../../../generated/graphql';
import { ProcedureTableSelect } from '../../ProcedureTable';
import { ProcedureSelect } from '../../Procedure';
import { DoctorSelect } from '../../Doctor';
import { PatientSelect } from '../../Patient';
import { SCHEDULES } from '../gql';
import { transformStringDayInTimestamp, sumInDate } from '../../../utils/formatDate';

interface IScheduleFormModal {
  open: boolean;
  onClose: () => void;
  selectedEvent?: Schedule
}

interface ISelect {
  id: string;
  name: string;
}

const options = [
  { label: '30 minutos', value: '30' },
  { label: '60 minutos', value: '60' },
  { label: '90 minutos', value: '90' },
];

const ScheduleFormModal: React.FC<IScheduleFormModal> = ({ open, onClose, selectedEvent }) => {
  const {
    control, errors, handleSubmit, reset,
  } = useForm<ScheduleInput>();

  const [minutes, setMinutes] = useState('30');
  const [title, setTitle] = useState('Criar Agendamento');

  const [procedureTable, setProcedureTable] = useState<ISelect>();
  const handleSetProcedureTable = (value: ISelect) => setProcedureTable(value);

  const [inputProcedureTable, setInputProcedureTable] = useState('');
  const handleSetInputProcedureTable = (value: string) => setInputProcedureTable(value);

  const [createSchedule, { loading: createLoading }] = useCreateScheduleMutation({
    onCompleted: (createdSchedule) => {
      if (createdSchedule) {
        onClose();
      }
    },
    refetchQueries: [{
      query: SCHEDULES,
      variables: { end: '', start: '' },
    }],
  });

  const [updateSchedule, { loading: updateLoading }] = useUpdateScheduleMutation({
    onCompleted: (createdSchedule) => {
      if (createdSchedule) {
        onClose();
      }
    },
    refetchQueries: [{
      query: SCHEDULES,
      variables: { end: '', start: '' },
    }],
  });

  const onSubmit = (schedule: ScheduleInput) => {
    const { start } = schedule;
    const input: ScheduleInput = {
      ...schedule,
      start: transformStringDayInTimestamp(start),
      end: transformStringDayInTimestamp(sumInDate(start, parseInt(minutes, 10), 'minutes')),
    };
    if (selectedEvent) {
      updateSchedule({ variables: { id: selectedEvent.id, input } });
    } else {
      createSchedule({ variables: { input } });
    }
  };

  const handleSetFormValues = () => {
    if (selectedEvent?.id) {
      reset(selectedEvent as any);
      setTitle('Editar agendamento');
    } else { setTitle('Criar Agendamento'); }
  };

  useEffect(handleSetFormValues, [selectedEvent]);

  return (
    <Modal
      title={title}
      open={open}
      onClose={onClose}
    >
      <Form onSubmit={handleSubmit(onSubmit)}>

        <Modal.Section>
          <FormLayout>
            <Controller
              as={<TextField type="text" label="Titulo" error={`${errors.title ? 'Titulo obrigatorio' : ''}`} onChange={() => { }} />}
              control={control}
              name="title"
              rules={{ required: true }}
            />

            <FormLayout.Group>
              <Controller
                as={(
                  <TextField type="datetime-local" label="Data/Hora" error={`${errors.start ? 'Titulo obrigatorio' : ''}`} onChange={() => { }} />
              )}
                name="start"
                control={control}
                rules={{ required: true }}
              />

              <Select
                label="Tempo do agendamento"
                options={options}
                onChange={setMinutes}
                value={minutes}
              />

            </FormLayout.Group>

            <DoctorSelect
              control={control}
              name="resources.doctor"
              label="Dentista"
              rules={{ required: true }}
              error={errors.resources?.doctor}
            />

            <PatientSelect
              control={control}
              name="resources.patient"
              label="Paciente"
              rules={{ required: true }}
              error={errors.resources?.patient}
            />

            <ProcedureTableSelect
              value={procedureTable!}
              setValue={handleSetProcedureTable}
              inputValue={inputProcedureTable}
              setInputValue={handleSetInputProcedureTable}
              name="procedureTable"
              label="Tabela de procedimentos"
            />

            <ProcedureSelect
              procedureTableId={procedureTable?.id!}
              control={control}
              name="resources.procedures"
              label="Procedimentos"
              isMulti
            />

            <Controller
              as={(
                <TextField type="text" multiline={5} label="Observações" onChange={() => { }} />
              )}
              name="resources.comments"
              control={control}
            />
          </FormLayout>
        </Modal.Section>
        <Modal.Section>
          <Stack distribution="equalSpacing">
            <Button loading={createLoading || updateLoading} onClick={onClose}>Cancelar</Button>
            <Button loading={createLoading || updateLoading} submit primary>Salvar</Button>
          </Stack>
        </Modal.Section>
      </Form>
    </Modal>
  );
};

export default ScheduleFormModal;
