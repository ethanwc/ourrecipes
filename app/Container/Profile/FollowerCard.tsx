import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Avatar, Button} from 'react-native-elements';
import {Theme, Typography} from '../../assets/styles';

export interface followerCardProps {
  // followerName: string;
  // followerImage: string;
  isFollowing: boolean;
}

const FollowerCard = (props: followerCardProps) => {
  return (
    <View style={follerCardStyleStyle.container}>
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

      <Button
        title={props.isFollowing ? 'Following' : 'Follow'}
        titleStyle={{
          ...Typography.Typography.subheader,
          color: Theme.Light.shadow,
        }}
        buttonStyle={{
          backgroundColor: 'orange',
          paddingHorizontal: 15,
          borderRadius: 5,
        }}
      />
    </View>
  );
};

const follerCardStyleStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: Theme.Light.shadow,
    borderBottomWidth: 0.3,
    borderBottomColor: Theme.Light.body,
  },
});

export default FollowerCard;
