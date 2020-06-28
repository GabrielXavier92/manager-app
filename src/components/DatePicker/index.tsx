import React, { useState } from 'react';
import {
  TextField, Popover, DatePicker as DatePickerPolaris,
} from '@shopify/polaris';

import { Controller } from 'react-hook-form';
import { formatBirthDate } from '../../utils/formatDate';

interface IDatePicker {
  control: any;
  setValue: any
  name: string;
  label?: string
}

const DatePicker: React.FC<IDatePicker> = ({
  control, setValue, name, label = 'Data',
}) => {
  const [popoverActive, setPopoverActive] = useState(false);

  const date = new Date();

  const [{ month, year }, setDate] = useState({
    month: date.getMonth(),
    year: date.getFullYear(),
  });


  const [selectedDates, setSelectedDates] = useState({
    start: new Date(),
    end: new Date(),
  });

  const handleMonthChange = (newMonth: number, newYear: number) => setDate({ month: newMonth, year: newYear });


  const togglePopoverActive = () => setPopoverActive(!popoverActive);

  const activator = (
    <div onClick={togglePopoverActive}>
      <Controller
        as={(
          <TextField type="text" placeholder="Selecione uma data" label={label} onChange={() => { }} />
      )}
        control={control}
        name={name}
      />
    </div>
  );

  return (
    <Popover
      active={popoverActive}
      activator={activator}
      onClose={togglePopoverActive}
      preferredAlignment="left"
    >
      <DatePickerPolaris
        month={month}
        year={year}
        onChange={(dates) => {
          const { start, end } = dates;
          setValue(name, formatBirthDate(start));
          setSelectedDates({ start, end });
        }}
        onMonthChange={handleMonthChange}
        selected={selectedDates}
      />
    </Popover>
  );
};

export default DatePicker;
