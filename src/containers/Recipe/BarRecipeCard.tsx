import React from 'react';
import {View, Text, StyleSheet, Image, TouchableHighlight} from 'react-native';
import {Theme, Typography} from '../../assets/styles';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/Feather';
import {Bookmark, Recipe} from 'src/redux/recipe/types';
import {removeBookmarkAsync} from '../../redux/user/actions';
import {User} from '../../redux/user/types';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'src/redux';

export interface BarRecipeCardProps {
  recipe: Bookmark;
  navigation: any;
}

//todo: fix uri here
const BarRecipeCard = (props: BarRecipeCardProps) => {
  const dispatch = useDispatch();
  const userSession: any = useSelector(
    (state: RootState) => state.UserReducer.session,
  );
  return (
    <TouchableHighlight
      style={barRecipeCardProps.container}
      underlayColor={'transparent'}
      onPress={() =>
        props.navigation.navigate('Recipes', {
          screen: 'Recipe',
          params: {
            recipe: props.recipe.id,
          },
        })
      }>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Image
          style={{
            width: responsiveWidth(20),
            height: responsiveWidth(20),
            alignSelf: 'flex-start',
          }}
          source={{uri: props.recipe.imageUrl.toString()}}
        />
        <View
          style={{
            marginLeft: responsiveWidth(1.25),
            justifyContent: 'space-evenly',
            flex: 1,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={Typography.Typography.subheadline}>
              {props.recipe.name}
            </Text>
            <Icon
              name="bookmark"
              size={24}
              color={Theme.Light.caption}
              style={{position: 'absolute', right: 10, top: 10}}
              onPress={() =>
                dispatch(removeBookmarkAsync(userSession.jwt, props.recipe.id))
              }
            />
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon
              name="clock"
              size={16}
              color={Theme.Light.headline}
              style={{marginRight: 5}}
            />
            <Text
              style={
                Typography.Typography.body
              }>{`${props.recipe.cookTime} min`}</Text>
            <Icon
              name="star"
              style={{color: 'gold', marginLeft: 5}}
              size={16}
            />
            <Text style={{...Typography.Typography.body, marginLeft: 5}}>
              {props.recipe.reviewRating}
            </Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const barRecipeCardProps = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: Theme.Light.shadow,
    borderBottomColor: Theme.Light.body,
    marginVertical: 5,
  },
  dot: {
    backgroundColor: Theme.Light.headline,
    borderRadius: 4,
    width: 4,
    height: 4,
    marginHorizontal: 5,
  },
});

export default BarRecipeCard;
