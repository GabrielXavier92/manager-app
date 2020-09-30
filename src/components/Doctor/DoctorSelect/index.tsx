import React, { useState, useEffect } from 'react';

import { useDoctorsQuery } from '../../../generated/graphql';

import Select from '../../Select';

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
      <span>{label}</span>
      <Select
        name={name}
        control={control}
        rules={rules}
        defaultValue={doctorSelect[0]}
        isLoading={loading}
        options={doctorSelect}
        value={value}
        onChange={setValue}
        inputValue={inputValue}
        onInputChange={setInputValue}
        error={error}
        errorMessage="Campo dentista obrigatorio"
      />
    </>
  );
};

export default ProcedureTableSelect;
