import React from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {Theme, Typography} from '../../assets/styles';
import {User} from 'src/redux/user/types';

export interface CountsBarProps {
  navigation: any;
  followers: number;
  following: number;
  recipes: number;
}
/** Container to show basic user stats */
const CountsBar = (props: CountsBarProps) => {
  return (
    <View style={countsBarStyle.container}>
      <View style={countsBarStyle.wrapper}>
        <Text style={countsBarStyle.count}>{props.recipes}</Text>
        <Text style={countsBarStyle.description}>Recipes</Text>
      </View>
      <TouchableWithoutFeedback
        onPress={() =>
          props.navigation.navigate('Account', {
            screen: 'Followers',
            params: {},
          })
        }>
        <View style={countsBarStyle.wrapper}>
          <Text style={countsBarStyle.count}>{props.following}</Text>
          <Text style={countsBarStyle.description}>Followers</Text>
        </View>
      </TouchableWithoutFeedback>

      <View style={countsBarStyle.wrapper}>
        <Text style={countsBarStyle.count}>{props.following}</Text>
        <Text style={countsBarStyle.description}>Following</Text>
      </View>
    </View>
  );
};

const countsBarStyle = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    flex: 1,
    marginLeft: 20,
    marginRight: 10,
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  count: {
    ...Typography.Typography.headerflat,
    color: Theme.Light.caption,
    marginRight: 5,
  },
  description: {
    ...Typography.Typography.body,
    color: Theme.Light.headline,
  },
});

export default CountsBar;
