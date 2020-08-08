import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {StyleSheet, View, TouchableWithoutFeedback} from 'react-native';
import {Theme, Typography} from '../../assets/styles';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {TextInput} from 'react-native-gesture-handler';
import {Text, Input, Icon} from 'react-native-elements';
import {
  TextField,
  FilledTextField,
  OutlinedTextField,
} from 'react-native-material-textfield';
import ImageSelector from '../../utils/ImageSelector/ImageSelector';

var parser = require('ingredients-parser');

export interface createDirectionCardProps {
  order: Number;
}

const CreateDirectionCard = (props: createDirectionCardProps) => {
  const [input, setInput] = useState(
    'Lorem ips daw kljadwlkjawkl djalkwj dkl;awlk djklajl wdknawmlk; dja lwkjdd awlkjjl;ka dw',
  );
  const [focused, setFocused] = useState(false);

  const textRender = focused ? (
    <TextInput
      placeholder={'Ingredient'}
      value={input}
      onChangeText={(text: string) => setInput(text)}
      // autoFocus={true}
      style={{
        // ...createIngredientCardStyle.container,
        ...createDirectionCardStyle.input,
      }}
      editable={true}
      onSubmitEditing={() => console.log('submitted')}
    />
  ) : (
    <Text
      style={{
        color: input ? Theme.Light.caption : Theme.Light.body,
      }}>
      {input ? input : 'Ingredient'}
    </Text>
  );

  return (
    <View style={createDirectionCardStyle.container}>
      <View style={{flex: 0}}>
        <Text style={createDirectionCardStyle.step}>1</Text>
      </View>

      <View style={{flexGrow: 1, flex: 1}}>
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
      </View>

      <View style={{flex: 0}}>
        <ImageSelector
          size={'small'}
          onImageSelected={(url: string) => console.log(url)}
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
    marginBottom: 5,
    paddingTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: 'center',
  },
  step: {
    ...Typography.Typography.subheader,
    color: Theme.Light.headline,
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

export default CreateDirectionCard;
