import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Input, Image } from 'react-native-elements';
import { Theme, Typography } from '../../assets/styles';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import TimePicker from '../../utils/TimePicker/TimePicker';

const InfoBar = () => {
  const [prepTime, setPrepTime] = useState('');
  const [cookTime, setCookTime] = useState('');
  const [servingSize, setServingSize] = useState('');

  const [prepTimePicker, setPrepTimePicker] = useState(false);
  const [cookTimePicker, setCookTimePicker] = useState(false);


  return (
    <View style={infoBarStyle.container}>
      {/* Prep Time */}
      <TouchableOpacity
        onPress={() => setPrepTimePicker(true)}
        style={{ flex: 1 }}>
        <Input
          value={prepTime.toString()}
          placeholder="Prep Time"
          inputStyle={infoBarStyle.input}
          keyboardType={'numeric'}
          editable={false}
        />
      </TouchableOpacity>

      {/* Cook Time */}
      <TouchableOpacity
        onPress={() => setCookTimePicker(true)}
        style={{ flex: 1 }}>
        <Input
          value={cookTime.toString()}
          placeholder="Cook Time"
          inputStyle={infoBarStyle.input}
          keyboardType={'numeric'}
          editable={false}
        />
      </TouchableOpacity>

      {/* Serving Size */}
      <Input
        value={servingSize}
        placeholder="Serving Size"
        inputStyle={infoBarStyle.input}
        keyboardType={'numeric'}
        onChangeText={(text: string) => setServingSize(text)}
        containerStyle={{ flex: 1 }}
      />

      {/* Time pickers... default hidden */}
      <TimePicker onTimePicked={(date: Date) => setPrepTime(date.getHours() + ':' + date.getMinutes())} showTimePicker={prepTimePicker} setShowTimePicker={(state: boolean) => setPrepTimePicker(state)} />
      <TimePicker onTimePicked={(date: Date) => setCookTime(date.getHours() + ':' + date.getMinutes())} showTimePicker={cookTimePicker} setShowTimePicker={(state: boolean) => setCookTimePicker(state)} />

    </View>
  );
};

const infoBarStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Theme.Light.shadow,
    marginVertical: 15,
  },
  input: {
    ...Typography.Typography.subheader,
    color: Theme.Light.caption,
    alignSelf: 'center',
  },
});

export default InfoBar;
