import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from 'react-native';
import {Theme, Typography} from '../../assets/styles';
import {Input, Icon} from 'react-native-elements';
import VoiceWrapper from '../../utils/VoiceWrapper/VoiceWrapper';
import wordsToNumbers from 'words-to-numbers';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {TextInput} from 'react-native-gesture-handler';
import {edit} from 'src/redux/group/actions';
import {Ingredient} from 'src/redux/recipe/types';

var parser = require('ingredients-parser');

const CreateIngredientCard = () => {
  const [input, setInput] = useState('');
  const [focused, setFocused] = useState(false);

  const clearIcon = input ? (
    <Icon
      onPress={() => setInput('')}
      type={'feather'}
      name={'x'}
      onPressIn={() => setInput('')}
      color={Theme.Light.caption}
    />
  ) : null;

  const textRender = focused ? (
    <TextInput
      placeholder={'Ingredient'}
      value={input}
      onChangeText={(text: string) => setInput(text)}
      autoFocus={true}
      style={{
        ...createIngredientCardStyle.container,
        ...createIngredientCardStyle.input,
      }}
      editable={focused}
      onSubmitEditing={() => console.log('submitted')}
    />
  ) : (
    <Text
      numberOfLines={1}
      style={{
        ...createIngredientCardStyle.container,
        ...createIngredientCardStyle.text,
        ...createIngredientCardStyle.input,
        color: input ? Theme.Light.caption : Theme.Light.body,
      }}>
      {input ? input : 'Ingredient'}
    </Text>
  );

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        console.log('focus idiot!');
        setFocused(true);
      }}
      onBlur={() => {
        setFocused(false);
        console.log('defocus!');
      }}>
      {textRender}
    </TouchableWithoutFeedback>
  );
};

const createIngredientCardStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Theme.Light.shadow,
    borderRadius: 5,
    paddingHorizontal: 20,
    marginVertical: 2.5,
    marginHorizontal: 10,
    paddingVertical: 20,
    alignItems: 'center',
    flex: 1,
  },
  text: {
    paddingVertical: 25,
  },
  input: {
    width: '100%',
    ...Typography.Typography.subheader,
    color: Theme.Light.caption,
  },
});

export default CreateIngredientCard;
