import React from 'react';
import ReactSelect from 'react-select';
import { Controller } from 'react-hook-form';
import { InlineError } from '@shopify/polaris';

interface ISelectOptions {
  id: string;
  name: string;
}

interface ISelect {
  name: string;
  defaultValue?: ISelectOptions;
  isMulti?: boolean;
  isLoading?: boolean;
  error?: boolean;
  errorMessage?: string;
  options: ISelectOptions[];
  value?: ISelectOptions;
  onChange?: (e: any) => void;
  inputValue?: string;
  onInputChange?: (e: any) => void;
  onMenuScrollToBottom?: () => void;
  rules?: any;
  control?: any;
}

const Select: React.FC<ISelect> = ({
  name,
  defaultValue,
  isLoading,
  error,
  errorMessage = 'Campo com erro',
  options,
  value,
  onChange,
  inputValue,
  onInputChange,
  control,
  rules,
  onMenuScrollToBottom,
  isMulti,
}) => {
  console.log('select');
  return (
    <>
      {control
    && (
    <>
      <Controller
        as={(
          <ReactSelect
            className="basic-single"
            classNamePrefix="select"
            styles={{ menu: (styles) => ({ ...styles, zIndex: 99 }) }}
            getOptionValue={(option) => option.id}
            getOptionLabel={(option) => option.name}
            defaultValue={defaultValue}
            isLoading={isLoading}
            options={options}
            value={value}
            onChange={onChange}
            inputValue={inputValue}
            onInputChange={onInputChange}
            onMenuScrollToBotton={onMenuScrollToBottom}
            isMulti={isMulti}
          />
      )}
        control={control}
        name={name}
        rules={rules}
      />
      <InlineError message={error ? errorMessage : ''} fieldID={name} />
    </>
    )}
      {!control && (
      <ReactSelect
        className="basic-single"
        classNamePrefix="select"
        menuPortalTarget={document.body}
        styles={{
          menu: (styles) => ({ ...styles, zIndex: 99 }),
          menuPortal: (base) => ({ ...base, zIndex: 9999 }),
        }}
        getOptionValue={(option) => option.id}
        getOptionLabel={(option) => option.name}
        defaultValue={defaultValue}
        isLoading={isLoading}
        options={options}
        value={value}
        onChange={onChange}
        inputValue={inputValue}
        onInputChange={onInputChange}
        onMenuScrollToBotton={onMenuScrollToBottom}
        isMulti={isMulti}
      />
      )}
    </>
  );
};

export default Select;
