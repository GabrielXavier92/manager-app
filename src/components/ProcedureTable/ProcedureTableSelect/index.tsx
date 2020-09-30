import React, { useState, useEffect } from 'react';
import ReactSelect from 'react-select';
import { Controller } from 'react-hook-form';

import { InlineError } from '@shopify/polaris';

import { useProcedureTablesQuery } from '../../../generated/graphql';

import Select from '../../Select';

interface ISelect {
  id: string;
  name: string;
}

interface IProcedureTableSelect {
  value?: ISelect,
  setValue: (value: any) => void;
  inputValue?: string;
  setInputValue?: (newValue: string) => void;
  control?: any;
  name: string;
  label: string;
  error?: any;
  rules?: any;
}

const ProcedureTableSelect: React.FC<IProcedureTableSelect> = ({
  value,
  setValue,
  inputValue,
  setInputValue,
  control,
  name,
  label,
  error,
  rules,
}) => {
  const [selectProcedureTables, setSelectProcedureTables] = useState<Array<ISelect>>([]);
  const { data, loading } = useProcedureTablesQuery();
  const handleSetProcedureTables = () => {
    if (data?.procedureTables) {
      setSelectProcedureTables(data.procedureTables.map((table) => ({ id: table.id, name: table.name })));
    }
  };
  useEffect(handleSetProcedureTables, [data?.procedureTables]);

  return (
    <>
      <span>{label}</span>
      <Select
        name={name}
        control={control}
        rules={rules}
        defaultValue={selectProcedureTables[0]}
        isLoading={loading}
        options={selectProcedureTables}
        value={value}
        onChange={setValue}
        inputValue={inputValue}
        onInputChange={setInputValue}
        error={error}
        errorMessage="Campo tabela de procedimentos obrigatorio"
      />
    </>
  );
};

export default ProcedureTableSelect;
