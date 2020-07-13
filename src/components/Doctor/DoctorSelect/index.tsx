import React, { useState, useEffect } from 'react';
import ReactSelect from 'react-select';
import { Controller } from 'react-hook-form';

import { InlineError } from '@shopify/polaris';
import { useDoctorsQuery } from '../../../generated/graphql';

interface ISelect {
  id: string;
  name: string;
}

interface IDoctorSelect {
  value?: ISelect,
  setValue?: (value: any) => void;
  inputValue?: string;
  setInputValue?: (newValue: string) => void;
  control?: any;
  rules?: any;
  error?: any;
  name: string;
  label: string;
}

const ProcedureTableSelect: React.FC<IDoctorSelect> = ({
  value,
  setValue,
  inputValue,
  setInputValue,
  control,
  rules,
  error,
  name,
  label,
}) => {
  const [doctorSelect, setDoctorSelect] = useState<Array<ISelect>>([]);
  const { data, loading } = useDoctorsQuery();
  const handleSetDoctorSelect = () => {
    if (data?.doctors) {
      setDoctorSelect(data.doctors.map((doctor) => ({ id: doctor.id, name: doctor.name })));
    }
  };
  useEffect(handleSetDoctorSelect, [data?.doctors]);

  return (
    <>
      {control
        && (
          <>
            <span>{label}</span>
            <Controller
              as={(
                <ReactSelect
                  className="basic-single"
                  classNamePrefix="select"
                  styles={{ menu: (styles) => ({ ...styles, zIndex: 99 }) }}
                  getOptionValue={(option) => option.id}
                  getOptionLabel={(option) => option.name}
                  defaultValue={doctorSelect[0]}
                  isLoading={loading}
                  options={doctorSelect}
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
            <InlineError message={error ? 'Campo dentista obrigatorio' : ''} fieldID={name} />
          </>
        )}
      {!control && (
        <>
          <span>{label}</span>
          <ReactSelect
            className="basic-single"
            classNamePrefix="select"
            styles={{ menu: (styles) => ({ ...styles, zIndex: 99 }) }}
            getOptionValue={(option) => option.id}
            getOptionLabel={(option) => option.name}
            defaultValue={doctorSelect[0]}
            isLoading={loading}
            options={doctorSelect}
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
