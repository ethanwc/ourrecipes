import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  TextInput,
} from 'react-native';
import {Theme, Typography} from '../../assets/styles';
import {Text, Input, Icon} from 'react-native-elements';
import ImageSelector from '../../utils/ImageSelector/ImageSelector';

var parser = require('ingredients-parser');

export interface createDirectionCardProps {
  order: Number;
}

const CreateDirectionCard = (props: createDirectionCardProps) => {
  const [input, setInput] = useState('');
  const [focused, setFocused] = useState(false);

  const textRender = focused ? (
    <TextInput
      placeholder={`Step ${props.order}`}
      value={input}
      autoFocus={true}
      onChangeText={(text: string) => setInput(text)}
      style={{
        // ...createIngredientCardStyle.container,

        ...createDirectionCardStyle.input,
      }}
      editable={true}
      onSubmitEditing={() => console.log('submitted')}
    />
  ) : (
    <Text
      // numberOfLines={1}
      style={{
        ...createDirectionCardStyle.input,
        color: input ? Theme.Light.caption : Theme.Light.body,
      }}>
      {input ? input : `Step ${props.order}`}
    </Text>
  );

  return (
    <View style={createDirectionCardStyle.container}>
      <View style={{flex: 1}}>
        <Text style={createDirectionCardStyle.step}>{props.order}</Text>
      </View>

      <View style={{flexGrow: 4, flex: 1, marginRight: 20}}>
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

      <View style={{flexGrow: 0}}>
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
    backgroundColor: Theme.Light.shadow,
    borderRadius: 5,
    paddingHorizontal: 20,
    marginVertical: 2.5,
    marginHorizontal: 10,
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
