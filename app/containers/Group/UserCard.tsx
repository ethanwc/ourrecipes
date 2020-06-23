import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Avatar, Button} from 'react-native-elements';
import {Theme, Typography} from '../../assets/styles';
import { responsiveWidth } from 'react-native-responsive-dimensions';

export interface userCardProps {
  // followerName: string;
  // followerImage: string;
}

const UserCard = (props: userCardProps) => {
  return (
    <View style={userCardProps.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Avatar
          rounded
          size={'medium'}
          source={{
            uri:
              'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          }}
        />
        <View style={{marginLeft: 15}}>
          <Text style={Typography.Typography.subheader}>Deba Boyd</Text>
          <Text style={{...Typography.Typography.bodyflat, marginTop: 4}}>
            20 recipes
          </Text>
        </View>
      </View>
    </View>
  );
};

const userCardProps = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: Theme.Light.shadow,
    borderBottomWidth: 0.3,
    borderBottomColor: Theme.Light.body,
    width: responsiveWidth(75),
  },
});

export default UserCard;
