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

  if (!input) {
    textRender = (
      <TextInput
        placeholder={'Ingredient'}
        value={input}
        onChangeText={(text: string) => setInput(text)}
        style={createIngredientCardStyle.container}
        autoFocus={true}
        onSubmitEditing={() => console.log('submitted')}
      />
    );
  } else if (focused && input) {
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
  } else if (focused && !input) {
    textRender = (
      <TextInput
        placeholder={'Ingredient'}
        value={input}
        autoFocus={true}
        onChangeText={(text: string) => setInput(text)}
        style={{
          ...createIngredientCardStyle.container,
          ...createIngredientCardStyle.input,
        }}
        editable={focused}
        onSubmitEditing={() => console.log('submitted')}
      />
    );
  } else if (!focused && input) {
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
  } else {
    textRender = <Text>wtf</Text>;
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        console.log('focus harder idiot!');
        setFocused(true);
      }}
      onFocus={() => {
        console.log('focus harder idiot!');
        setFocused(true);
      }}
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
    marginHorizontal: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop: 10,
    alignItems: 'center',
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
