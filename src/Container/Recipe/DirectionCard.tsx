import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Theme, Typography} from '../../assets/styles';
import {TouchableHighlight} from 'react-native-gesture-handler';

export interface directionCardProps {
  order: Number;
  direction: string;
}

const DirectionCard = (props: directionCardProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const checkStatus = isChecked ? 'check-circle' : 'circle';

  return (
    <TouchableHighlight onPress={() => setIsChecked(!isChecked)}>
      <View style={directionCardStyle.container}>
        <Icon
          name={checkStatus}
          size={30}
          color={Theme.Light.caption}
          style={{alignSelf: 'flex-start'}}
        />
        <Text
          style={{...Typography.Typography.subheader, paddingHorizontal: 15}}>
          {props.direction}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

const directionCardStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: Theme.Light.shadow,
    borderBottomWidth: 0.3,
    borderBottomColor: Theme.Light.body,
  },
});

export default DirectionCard;
