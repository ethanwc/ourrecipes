import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Avatar} from 'react-native-elements';
import {Typography} from '../../assets/styles';

export interface prifleInfoProps {
  name: string;
  location: string;
}

const ProfileInfo = () => {
  return (
    <View style={profileInfoStyle.container}>
      <Avatar
        rounded
        size={'large'}
        source={{
          uri:
            'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        }}
        showAccessory
      />
      <View style={profileInfoStyle.wrapper}>
        <Text style={profileInfoStyle.name}>Steve Jobs</Text>
        <Text style={profileInfoStyle.location}>Seattle, WA</Text>
      </View>
    </View>
  );
};

const profileInfoStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  wrapper: {
    marginTop: 5,
    margin: 10,
  },
  name: {
    ...Typography.Typography.headerflat,
  },
  location: {
    ...Typography.Typography.headline,
  },
});

export default ProfileInfo;
