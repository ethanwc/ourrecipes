import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../../styles';

export interface GroupBarProps {
  rightButtonOnPress: Function;
}

const GroupBar = (props: GroupBarProps) => {
  return (
    <View>
      <View style={groupBarStyle.container}>
        <View style={groupBarStyle.innerContainer}>
          <Icon
            name={'bars'}
            size={16}
            color={Colors.lightTheme.backgroundPrimary}
            style={{marginHorizontal: 10}}
          />
          <Icon
            name={'plus'}
            size={16}
            color={Colors.lightTheme.backgroundPrimary}
            style={{marginHorizontal: 10}}
            onPress={() => props.rightButtonOnPress()}
          />
        </View>
      </View>
    </View>
  );
};

const groupBarStyle = StyleSheet.create({
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
});

export default GroupBar;
