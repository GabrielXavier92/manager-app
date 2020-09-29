import React, { useState, useEffect } from 'react';
import ReactSelect from 'react-select';
import { Controller } from 'react-hook-form';

import { InlineError } from '@shopify/polaris';

import { useProcedureTablesQuery } from '../../../generated/graphql';

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
      { control
        && (
        <>
          <span>{label}</span>
          <Controller
            as={(
              <ReactSelect
                className="basic-single"
                classNamePrefix="select"
                getOptionValue={(option) => option.id}
                getOptionLabel={(option) => option.name}
                defaultValue={selectProcedureTables[0]}
                isLoading={loading}
                options={selectProcedureTables}
                value={value}
                onChange={setValue}
                inputValue={inputValue}
                onInputChange={setInputValue}
              />
          )}
            control={control}
            name={name}
            rules={rules}
          />
          <InlineError message={error ? 'Campo tabela de procedimentos obrigatorio' : ''} fieldID={name} />

        </>
        )}
      {!control && (
        <>
          <span>{label}</span>
          <ReactSelect
            className="basic-single"
            classNamePrefix="select"
            getOptionValue={(option) => option.id}
            getOptionLabel={(option) => option.name}
            defaultValue={selectProcedureTables[0]}
            isLoading={loading}
            options={selectProcedureTables}
            value={value}
            onChange={setValue}
            inputValue={inputValue}
            onInputChange={setInputValue}
          />
        </>
      )}
    </>
  );
};

export default ProcedureTableSelect;
