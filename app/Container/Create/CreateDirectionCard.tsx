import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Theme, Typography} from '../../assets/styles';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {TextInput} from 'react-native-gesture-handler';
import {Text, Input, Icon} from 'react-native-elements';
import {
  TextField,
  FilledTextField,
  OutlinedTextField,
} from 'react-native-material-textfield';

var parser = require('ingredients-parser');

export interface createDirectionCardProps {
  // amount: Number;
  // ingredient: string;
  // unit: string;
}

const CreateDirectionCard = (props: createDirectionCardProps) => {
  const [input, setInput] = useState('asf');

  const clearIcon = input ? (
    <Icon
      type={'feather'}
      name={'x'}
      onPressIn={() => setInput('')}
      color={Theme.Light.caption}
      style={createDirectionCardStyle.icon}
    />
  ) : null;

  return (
    <View style={createDirectionCardStyle.container}>
      <View style={{padding: 0}}>
        <TextInput
          style={createDirectionCardStyle.step}
          placeholder={'Step 1'}
          editable={false}
          textAlignVertical={'top'}
        />
      </View>
      <View style={{flex: 1}}>
        <TextInput
          placeholder={'asdf'}
          multiline={true}
          textAlignVertical={'top'}
          style={createDirectionCardStyle.input}
        />
      </View>
      {clearIcon}
    </View>
  );
};

const createDirectionCardStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: Theme.Light.shadow,
    borderRadius: 5,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
    marginTop: 10,
  },
  step: {
    ...Typography.Typography.subheader,
    color: Theme.Light.headline,
    marginRight: 10,
  },
  input: {
    ...Typography.Typography.subheader,
    color: Theme.Light.caption,
  },
  icon: {
    flex: 1,
    marginTop: 8,
  },
});

export default CreateDirectionCard;
