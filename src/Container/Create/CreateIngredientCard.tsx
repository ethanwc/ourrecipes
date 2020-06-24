import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableHighlight} from 'react-native';
import {Theme, Typography} from '../../assets/styles';
import {Input, Icon} from 'react-native-elements';
import VoiceWrapper from '../../utils/VoiceWrapper/VoiceWrapper';
import wordsToNumbers from 'words-to-numbers';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {TextInput} from 'react-native-gesture-handler';

var parser = require('ingredients-parser');

export interface createIngredientCardProps {
  // amount: Number;
  // ingredient: string;
  // unit: string;
}

const CreateIngredientCard = (props: createIngredientCardProps) => {
  const [input, setInput] = useState('');

  const clearIcon = input ? (
    <Icon
      onPress={() => setInput('')}
      type={'feather'}
      name={'x'}
      onPressIn={() => setInput('')}
      color={Theme.Light.caption}
    />
  ) : null;

  return (
    <View style={createIngredientCardStyle.container}>
      <TextInput
        placeholder={'Ingredient'}
        value={input}
        onChangeText={(text: string) => setInput(text)}
        style={createIngredientCardStyle.input}
        onSubmitEditing={() => console.log('submitted')}
      />
      {clearIcon}
    </View>
  );
};

const createIngredientCardStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Theme.Light.shadow,
    borderRadius: 5,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    ...Typography.Typography.subheader,
    color: Theme.Light.caption,
  },
});

export default CreateIngredientCard;
