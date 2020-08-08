import React from 'react';
import {StyleSheet, View, Text, TouchableHighlight} from 'react-native';
import {Theme} from '../../assets/styles';
import {Icon} from 'react-native-elements';

export interface createNewCardProps {
  onPress: Function;
}

//card to create a new card
const CreateNewCard = (props: createNewCardProps) => {
  const createIcon = (
    <Icon
      type={'feather'}
      name={'plus'}
      color={Theme.Light.caption}
      onPress={() => props.onPress()}
    />
  );

  return <View style={createNewCardStyle.container}>{createIcon}</View>;
};

const createNewCardStyle = StyleSheet.create({
  container: {
    backgroundColor: Theme.Light.shadow,
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 10,
    marginTop: 2.5,
    // marginVertical: 10,
    // margin: 10,
    // paddingVertical: 10,
    justifyContent: 'center',
  },
});

export default CreateNewCard;
