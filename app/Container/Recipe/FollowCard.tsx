import React from 'react';
import {View, Text} from 'react-native';
import {Avatar, Button} from 'react-native-elements';
import {Theme, Typography} from '../../assets/styles';

const FollowCard = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 15,
        backgroundColor: Theme.Light.shadow,
        borderBottomWidth: 0.3,
        borderBottomColor: Theme.Light.body,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Avatar
          rounded
          size={'large'}
          source={{
            uri:
              'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          }}
        />
        <View style={{marginLeft: 15}}>
          <Text style={Typography.Typography.subheader}>Deba Boyd</Text>
          <Text style={Typography.Typography.bodyflat}>20 recipes</Text>
        </View>
      </View>

      <Button
        title="Follow"
        titleStyle={{
          ...Typography.Typography.subheader,
          color: Theme.Light.shadow,
        }}
        buttonStyle={{
          backgroundColor: 'orange',
          paddingHorizontal: 25,
          borderRadius: 5,
        }}
      />
    </View>
  );
};

export default FollowCard;
