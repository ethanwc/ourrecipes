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
import {Direction} from '../../redux/recipe/types';
import {editDirection} from '../../redux/createrecipe/actions';
import {useDispatch} from 'react-redux';

var parser = require('ingredients-parser');

export interface CreateDirectionCardProps {
  direction: Direction;
}

const CreateDirectionCard = (props: CreateDirectionCardProps) => {
  const [focused, setFocused] = useState(false);
  const dispatch = useDispatch();

  const textRender = focused ? (
    <TextInput
      placeholder={`Step ${props.direction.step}`}
      value={props.direction.instruction}
      autoFocus={true}
      onChangeText={(text: string) => {
        dispatch(
          editDirection({
            id: props.direction.id,
            step: props.direction.step,
            instruction: text,
            imageUrl: props.direction.imageUrl,
          }),
        );
      }}
      style={{
        ...createDirectionCardStyle.input,
      }}
      editable={true}
      onSubmitEditing={() => console.log('submitted')}
    />
  ) : (
    <Text
      style={{
        ...createDirectionCardStyle.input,
        color: props.direction.instruction
          ? Theme.Light.caption
          : Theme.Light.body,
      }}>
      {props.direction.instruction
        ? props.direction.instruction
        : `Step ${props.direction.step}`}
    </Text>
  );

  return (
    <View style={createDirectionCardStyle.container}>
      <View style={{flex: 1}}>
        <Text style={createDirectionCardStyle.step}>
          {props.direction.step}
        </Text>
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
          onImageSelected={(url: string) =>
            dispatch(
              editDirection({
                id: props.direction.id,
                step: props.direction.step,
                instruction: props.direction.instruction,
                imageUrl: url,
              }),
            )
          }
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
