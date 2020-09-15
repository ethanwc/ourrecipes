import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Avatar, Button} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'src/redux';
import {followUserAsync, unfollowUserAsync} from '../../redux/user/actions';
import {User} from '../../redux/user/types';
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
  const dispatch = useDispatch();

  const userSession: any = useSelector(
    (state: RootState) => state.UserReducer.session,
  );

  const userState: User = useSelector(
    (state: RootState) => state.UserReducer.user,
  );

  const handleFollow = () => {
    if (props.isFollowing) {
      dispatch(unfollowUserAsync(userSession.jwt, props.author.id.toString()));
    } else {
      dispatch(followUserAsync(userSession.jwt, props.author.id.toString()));
    }
  };

  console.log('asdf', userState.id, props.author.id);
  // Dont show for yourself
  if (userState.id === props.author.id) return null;

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
        onPress={() => handleFollow()}
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
