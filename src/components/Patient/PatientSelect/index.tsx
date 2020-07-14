import React, { useState, useEffect } from 'react';
import ReactSelect from 'react-select';
import { Controller } from 'react-hook-form';

import { InlineError } from '@shopify/polaris';
import { usePatientsQuery } from '../../../generated/graphql';

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
      <Controller
        as={(
          <ReactSelect
            className="basic-multi-select"
            classNamePrefix="select"
            styles={{ menu: (styles) => ({ ...styles, zIndex: 99 }) }}
            getOptionValue={(option) => option.id}
            getOptionLabel={(option) => option.name}
            isLoading={loading}
            options={selectPatients}
            value={value}
            onChange={setValue}
            inputValue={inputValue}
            onInputChange={setInputValue}
            onMenuScrollToBottom={handleGetNextPatients}
          />
        )}
        control={control}
        name={name}
        rules={rules}
      />
      <InlineError message={error ? 'Campo paciente obrigatorio' : ''} fieldID={name} />
    </>
  );
};

export default PatientSelect;
