import React, { useState, useEffect } from 'react';
import { useProceduresQuery } from '../../../generated/graphql';

import Select from '../../Select';

interface ISelect {
  id: string;
  name: string;
}

interface IProcedureSelect {
  value?: ISelect,
  setValue?: (value?: any) => void;
  procedureTableId: string;
  inputValue?: string;
  setInputValue?: (newValue: string) => void;
  label?: string;
  control: any;
  name: string;
  rules?: any;
  error?: any;
  isMulti?: boolean;
}

const ProcedureSelect: React.FC<IProcedureSelect> = ({
  value,
  setValue,
  procedureTableId,
  inputValue,
  setInputValue,
  label,
  control,
  rules,
  error,
  name,
  isMulti = false,
}) => {
  const [selectProcedures, setSelectProcedures] = useState<Array<ISelect>>([]);
  const { data, loading, fetchMore } = useProceduresQuery({
    variables: {
      procedureTableId,
      take: 10,
      cursor: '',
      filter: inputValue,
    },
    skip: !procedureTableId,
  });

  const handleSetProcedures = () => {
    if (data?.procedures?.procedures) {
      setSelectProcedures(data?.procedures?.procedures!.map((procedure) => ({ id: procedure?.id!, name: procedure?.name! })));
    }
  };

  useEffect(handleSetProcedures, [data?.procedures?.procedures!, procedureTableId]);

  const handleGetNextProcedures = () => {
    const cursor = data?.procedures?.procedures![data?.procedures?.procedures!.length - 1]!.id;
    fetchMore({
      variables: {
        procedureTableId,
        take: 10,
        cursor,
        filter: inputValue,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        const queryInfo = fetchMoreResult?.procedures?.queryInfo;
        const newProcedures = fetchMoreResult?.procedures?.procedures;
        if (!newProcedures!.length) return prev;
        return {
          procedures: {
            // eslint-disable-next-line no-underscore-dangle
            __typename: prev.procedures!.__typename,
            procedures: [...prev.procedures!.procedures!, ...newProcedures!],
            queryInfo,
          },
        };
      },
    });
  };

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <Select
        name={name}
        control={control}
        rules={rules}
        options={selectProcedures}
        isMulti={isMulti}
        value={value}
        onChange={setValue}
        inputValue={inputValue}
        onInputChange={setInputValue}
        onMenuScrollToBottom={handleGetNextProcedures}
        error={error}
        errorMessage="Campo procedimento obrigatorio"
        isLoading={loading}
      />
    </>
  );
};

export default ProcedureSelect;
