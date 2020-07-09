import React from 'react';
import {
  Button, Card, TextField, Stack, InlineError,
} from '@shopify/polaris';

import { Controller } from 'react-hook-form';

import { DeleteMajorMonotone } from '@shopify/polaris-icons';

interface IProcedureForm {
  item: any;
  index: number;
  control: any;
  remove: any;
  error: boolean;
}

const ProcedureForm: React.FC<IProcedureForm> = ({
  item, index, control, remove, error,
}) => (
  <Card sectioned>
    <Stack spacing="tight" distribution="fillEvenly" alignment="trailing">
      <Controller
        as={<TextField type="text" label="Nome do procedimento" onChange={() => { }} />}
        control={control}
        rules={{ required: true }}
        name={`procedures[${index}].name`}
        defaultValue={`${item.name}`}
      />
      <Controller
        as={<TextField type="text" label="Codigo" onChange={() => { }} />}
        control={control}
        name={`procedures[${index}].code`}
        defaultValue={`${item.code}`}
      />
      <Controller
        as={<TextField type="text" label="Valor" onChange={() => { }} />}
        control={control}
        name={`procedures[${index}].value`}
        defaultValue={`${item.value}`}
      />

      <div style={{ display: 'none' }}>
        <Controller
          as={<TextField type="text" label="ID" onChange={() => { }} />}
          control={control}
          name={`procedures[${index}].id`}
          defaultValue={`${item.id}`}
        />
      </div>

      <Button destructive icon={DeleteMajorMonotone} onClick={() => { remove(index); }} />
    </Stack>
    <InlineError message={error ? 'Nome do procedimento obrigatorio' : ''} fieldID={`procedures[${index}].name`} />
  </Card>
);

export default ProcedureForm;
