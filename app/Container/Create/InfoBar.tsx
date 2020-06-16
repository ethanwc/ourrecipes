import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements';
import { Theme, Typography } from '../../assets/styles';
import TimePicker from '../../utils/TimePicker/TimePicker';
import Icon from 'react-native-vector-icons/FontAwesome5';

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
        style={{ flex: 1, alignItems: 'center' }}>
        <Icon name={'egg'} size={26} color={Theme.Light.caption} />
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
        style={{ flex: 1, alignItems: 'center' }}>
        <Icon name={'fire'} size={26} color={Theme.Light.caption} />
        <Input
          value={cookTime.toString()}
          placeholder="Cook Time"
          inputStyle={infoBarStyle.input}
          keyboardType={'numeric'}
          editable={false}
        />
      </TouchableOpacity>

      {/* Serving Size */}
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Icon name={'users'} size={26} color={Theme.Light.caption} />
        <Input
          value={servingSize}
          placeholder="Serving Size"
          inputStyle={infoBarStyle.input}
          keyboardType={'numeric'}
          onChangeText={(text: string) => setServingSize(text)}
        />
      </View>

      {/* Time pickers... default hidden */}
      <TimePicker
        onTimePicked={(date: Date) => {
          const hours = date.getHours() >= 10 ? date.getHours() : '0' + date.getHours();
          const minutes = date.getMinutes() >= 10 ? date.getMinutes() : '0' + date.getMinutes();
          setPrepTime(`${hours}:${minutes}`);
        }
        }
        showTimePicker={prepTimePicker}
        setShowTimePicker={(state: boolean) => setPrepTimePicker(state)}
      />
      <TimePicker
        onTimePicked={(date: Date) => {
          const hours = date.getHours() >= 10 ? date.getHours() : '0' + date.getHours();
          const minutes = date.getMinutes() >= 10 ? date.getMinutes() : '0' + date.getMinutes();
          setCookTime(`${hours}:${minutes}`);
        }
        }
        showTimePicker={cookTimePicker}
        setShowTimePicker={(state: boolean) => setCookTimePicker(state)}
      />
    </View>
  );
};

const infoBarStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: Theme.Light.shadow,
    marginVertical: 15,
    marginHorizontal: 10,
    borderRadius: 15,
    paddingTop: 15,
  },
  input: {
    ...Typography.Typography.subheader,
    color: Theme.Light.caption,
    alignSelf: 'center',
    textAlign: 'center',
  },
});

export default InfoBar;
