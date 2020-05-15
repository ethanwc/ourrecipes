import React, { useState } from 'react';
import { View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export interface timePickerInterface {
  showTimePicker: boolean;
  setShowTimePicker: Function;
  onTimePicked: Function;
}

//wrapper to pick time
const TimePicker = (props: timePickerInterface) => {
  const [date, setDate] = useState(new Date(0, 0, 0));

  //handle time actually picked
  const onTimeSelected = (event: Event, date?: Date) => {
    props.setShowTimePicker(false)
    if (date) {
      props.onTimePicked(date);
      setDate(date)
    }
  }

  //render time picker conditionally
  const timePicker = props.showTimePicker ? <DateTimePicker
    timeZoneOffsetInMinutes={0}
    value={date}
    mode={'time'}
    is24Hour={true}
    display="default"
    onChange={(event: Event, date?: Date) => onTimeSelected(event, date)}
  /> : null;

  return (
    <View>
      {timePicker}
    </View>);
};

export default TimePicker;