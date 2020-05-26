import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Theme, Typography} from '../../assets/styles';

const CountsBar = () => {
  return (
    <View style={countsBarStyle.container}>
      <View style={countsBarStyle.wrapper}>
        <Text style={countsBarStyle.count}>11</Text>
        <Text style={countsBarStyle.description}>Recipes</Text>
      </View>
      <View style={countsBarStyle.wrapper}>
        <Text style={countsBarStyle.count}>23</Text>
        <Text style={countsBarStyle.description}>Followers</Text>
      </View>
      <View style={countsBarStyle.wrapper}>
        <Text style={countsBarStyle.count}>33</Text>
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
