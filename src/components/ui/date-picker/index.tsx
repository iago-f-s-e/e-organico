import React from 'react';

import DateTimePicker from '@react-native-community/datetimepicker';
import { If } from '@src/components/business';

type DateTimePickerEvent = {
  nativeEvent: {
    timestamp: number;
  };
  type: 'set' | 'dismissed';
};

type Props = {
  show: boolean;
  hide: () => void;
  value: Date;
  select: (value: Date) => void;
};

export const DatePicker = ({ hide, show, value, select }: Props): JSX.Element => {
  const handleCancel = () => hide();

  const handleSelect = (newDate: number) => {
    hide();

    return select(new Date(newDate));
  };

  const handleOnChange = (data: any) => { // eslint-disable-line
    const event = data as DateTimePickerEvent;

    if (event.type === 'dismissed') return handleCancel();

    return handleSelect(event.nativeEvent.timestamp);
  };

  return (
    <If
      condition={show}
      render={() => (
        <DateTimePicker
          value={value}
          maximumDate={new Date()}
          timeZoneOffsetInMinutes={60}
          mode="date"
          display="default"
          onChange={handleOnChange}
        />
      )}
    />
  );
};
