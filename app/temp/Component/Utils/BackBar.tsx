import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Colors} from '../../styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export interface backBarProps {
  barTitle?: string;
  leftIconName: string;
  rightIconName: string;
  leftIconColor?: string;
  rightIconColor?: string;
  leftIconOnPress: Function;
  rightIconOnPress: Function;
}

const BackBar = (props: backBarProps) => {
  return (
    <View style={backBarStyle.container}>
      <View style={backBarStyle.innerContainer}>
        <Icon
          name={props.leftIconName}
          size={16}
          color={Colors.lightTheme.backgroundPrimary}
          style={{marginHorizontal: 10}}
          onPress={() => props.leftIconOnPress()}
        />

        <Text>RielHouse</Text>

        <Icon
          name={props.rightIconName}
          size={16}
          color={Colors.lightTheme.backgroundPrimary}
          style={{marginHorizontal: 10}}
          onPress={() => props.rightIconOnPress()}
        />
      </View>
    </View>
  );
};

const backBarStyle = StyleSheet.create({
  container: {
    backgroundColor: Colors.lightTheme.textPrimary,
    opacity: 0.7,
    padding: 8,
  },
  innerContainer: {
    backgroundColor: Colors.lightTheme.textSecondary,
    opacity: 0.8,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 2,
    margin: 0,
    paddingVertical: 16.5,
    justifyContent: 'space-between',
  },
  textInput: {
    color: Colors.lightTheme.backgroundPrimary,
    flex: 1,
  },
});

export default BackBar;
