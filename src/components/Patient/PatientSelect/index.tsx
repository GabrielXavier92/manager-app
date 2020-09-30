import React, { useState, useEffect } from 'react';
import { usePatientsQuery } from '../../../generated/graphql';

import Select from '../../Select';

interface ISelect {
  id: string;
  name: string;
}

interface IPatientSelect {
  value?: ISelect,
  setValue?: (value?: any) => void;
  inputValue?: string;
  setInputValue?: (newValue: string) => void;
  label: string;
  control: any;
  rules?: any;
  error?: any;
  name: string;
}

const PatientSelect: React.FC<IPatientSelect> = ({
  value,
  setValue,
  inputValue,
  setInputValue,
  label,
  control,
  rules,
  error,
  name,
}) => {
  const [selectPatients, setSelectPatients] = useState<Array<ISelect>>([]);
  const { data, loading, fetchMore } = usePatientsQuery({
    variables: {
      take: 10,
      cursor: '',
      filter: inputValue,
    },
  });

  const handleSetPatients = () => {
    if (data?.patients?.patients) {
      setSelectPatients(data?.patients?.patients!.map((patient) => ({ id: patient?.id!, name: patient?.name! })));
    }
  };

  useEffect(handleSetPatients, [data?.patients?.patients!]);

  const handleGetNextPatients = () => {
    const cursor = data?.patients?.patients![data?.patients?.patients!.length - 1]!.id;
    fetchMore({
      variables: {
        take: 10,
        cursor,
        filter: inputValue,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        const queryInfo = fetchMoreResult?.patients?.queryInfo;
        const newPatients = fetchMoreResult?.patients?.patients;
        if (!newPatients!.length) return prev;
        return {
          patients: {
            // eslint-disable-next-line no-underscore-dangle
            __typename: prev.patients!.__typename,
            patients: [...prev.patients!.patients!, ...newPatients!],
            queryInfo,
          },
        };
      },
    });
  };

  return (
    <>
      <span>{label}</span>
      <Select
        name={name}
        control={control}
        rules={rules}
        isLoading={loading}
        options={selectPatients}
        value={value}
        onChange={setValue}
        inputValue={inputValue}
        onInputChange={setInputValue}
        onMenuScrollToBottom={handleGetNextPatients}
        error={error}
        errorMessage="Campo paciente obrigatorio"
      />
    </>
  );
};

export default PatientSelect;
