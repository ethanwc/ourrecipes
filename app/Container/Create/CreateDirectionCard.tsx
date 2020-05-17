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
  order: Number;
}

const CreateDirectionCard = (props: createDirectionCardProps) => {
  const [input, setInput] = useState('');

  const clearIcon = input ? (
    <Icon
      type={'feather'}
      name={'x'}
      onPress={() => setInput('')}
      color={Theme.Light.caption}
      style={createDirectionCardStyle.icon}
    />
  ) : (
    <Icon
      type={'feather'}
      name={'x'}
      size={0}
      color={Theme.Light.caption}
      style={createDirectionCardStyle.icon}
    />
  );

  return (
    <View style={createDirectionCardStyle.container}>
      <View style={{flex: 1}}>
        <Input
          placeholder={props.order.toString()}
          textAlignVertical={'top'}
          editable={false}
          inputStyle={createDirectionCardStyle.step}
          inputContainerStyle={{borderBottomWidth: 0}}
        />
      </View>
      <View style={{flex: 4}}>
        <Input
          placeholder={`Step ${props.order.toString()}`}
          textAlignVertical={'top'}
          multiline={true}
          inputStyle={createDirectionCardStyle.input}
          value={input}
          onChangeText={(text: string) => setInput(text)}
          inputContainerStyle={{borderBottomWidth: 0}}
          rightIconContainerStyle={{alignSelf: 'flex-start'}}
          rightIcon={clearIcon}
        />
      </View>
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
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
  },
});

export default CreateDirectionCard;
