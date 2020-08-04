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

var parser = require('ingredients-parser');

export interface createIngredientCardProps {
  // amount: Number;
  // ingredient: string;
  // unit: string;
}

const CreateIngredientCard = (props: createIngredientCardProps) => {
  const [input, setInput] = useState('');
  const [focused, setFocused] = useState(true);

  const clearIcon = input ? (
    <Icon
      onPress={() => setInput('')}
      type={'feather'}
      name={'x'}
      onPressIn={() => setInput('')}
      color={Theme.Light.caption}
    />
  ) : null;

  let textRender;

  console.log(input, focused);

  if (focused && !input) {
    console.log('a');
    textRender = (
      <TextInput
        placeholder={'Ingredient'}
        value={input}
        onChangeText={(text: string) => setInput(text)}
        // autoFocus={true}
        style={{
          ...createIngredientCardStyle.container,
          ...createIngredientCardStyle.input,
        }}
        editable={focused}
        onSubmitEditing={() => console.log('submitted')}
      />
    );
  } else if (focused) {
    console.log('b');

    textRender = (
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
    );
  } else if (!input) {
    console.log('c');

    textRender = (
      <Text
        style={{
          ...createIngredientCardStyle.container,
          ...createIngredientCardStyle.text,
          ...createIngredientCardStyle.inputPlaceholder,
        }}>
        Ingredient
      </Text>
    );
  } else {
    console.log('d');

    textRender = (
      <Text
        style={{
          ...createIngredientCardStyle.container,
          ...createIngredientCardStyle.text,
          ...createIngredientCardStyle.input,
        }}>
        {input}
      </Text>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        console.log('focus idiot!');
        setFocused(true);
      }}
      // onFocus={() => {
      //   console.log('focus harder idiot!');
      //   setFocused(true);
      // }}
      onBlur={() => {
        setFocused(false);
        console.log('defocus!');
      }}>
      {textRender}
      {/* {clearIcon} */}
    </TouchableWithoutFeedback>
  );
};

const createIngredientCardStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Theme.Light.shadow,
    borderRadius: 5,
    // marginHorizontal: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
    // marginVertical: 5,
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
  inputPlaceholder: {
    width: '100%',
    ...Typography.Typography.subheader,
    color: Theme.Light.body,
  },
});

export default CreateIngredientCard;
