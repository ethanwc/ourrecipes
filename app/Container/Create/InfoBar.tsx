import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Input, Image} from 'react-native-elements';
import {Theme, Typography} from '../../assets/styles';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const InfoBar = () => {
  const [prepTime, setPrepTime] = useState(new Date(1598051730000).getHours());
  const [cookTime, setCookTime] = useState(new Date(1598051730000).getHours());
  const [servingSize, setServingSize] = useState('');

  return (
    <View style={infoBarStyle.container}>
      <TouchableOpacity
        // onPress={() => setShowPrepTimePicker(true)}
        style={{flex: 1}}>
        <Input
          value={prepTime.toString()}
          placeholder="Prep Time"
          inputStyle={infoBarStyle.input}
          keyboardType={'numeric'}
          editable={false}
        />
      </TouchableOpacity>

      <TouchableWithoutFeedback
        // onPress={() => setShowPrepTimePicker(true)}
        containerStyle={{flex: 1}}>
        <Input
          value={prepTime.toString()}
          placeholder="Prep Time"
          inputStyle={infoBarStyle.input}
          keyboardType={'numeric'}
          editable={false}
        />
      </TouchableWithoutFeedback>

      <Input
        value={servingSize}
        placeholder="Serving Size"
        inputStyle={infoBarStyle.input}
        keyboardType={'numeric'}
        onChangeText={(text: string) => setServingSize(text)}
        containerStyle={{flex: 1}}
      />
    </View>
  );
};

const infoBarStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Theme.Light.shadow,
  },
  input: {
    ...Typography.Typography.subheader,
    color: Theme.Light.caption,
  },
});

export default InfoBar;
