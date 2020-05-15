import React from 'react';
import {View} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const TimePicker = () => {
  return <View></View>;
};

export default TimePicker;


const prepPicker = showPrepTimePicker ? (
    <DateTimePicker
      timeZoneOffsetInMinutes={0}
      value={date}
      mode={'time'}
      is24Hour={true}
      display="default"
      onChange={(event: Event, date?: Date) => onPrepChange(event, date)}
    />
  ) : null;



  const [showPrepTimePicker, setShowPrepTimePicker] = useState(false);
  const [showCookTimePicker, setShowCookTimePicker] = useState(false);
  const [date, setDate] = useState(new Date(1598051730000));
  const [show, setShow] = useState(false);

  const onPrepChange = (event: Event, selectedDate?: Date) => {
    if (selectedDate) {
      console.log(selectedDate.getHours() + selectedDate.getMinutes());
    }
  };