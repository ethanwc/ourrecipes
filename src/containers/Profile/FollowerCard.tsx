import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Avatar, Button} from 'react-native-elements';
import {Theme, Typography} from '../../assets/styles';

export interface RecipeAuthor {
  id: String;
  name: String;
  photo: String;
  recipeCount: number;
}
export interface FollowerCardProps {
  isFollowing: boolean;
  author: RecipeAuthor;
}

const FollowerCard = (props: FollowerCardProps) => {
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
            uri: props.author.photo.toString(),
          }}
        />
        <View style={{marginLeft: 15}}>
          <Text style={Typography.Typography.subheader}>
            {props.author.name}
          </Text>
          <Text style={{...Typography.Typography.bodyflat, marginTop: 4}}>
            {props.author.recipeCount} recipes
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
