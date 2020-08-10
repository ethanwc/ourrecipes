import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Theme, Typography} from '../../assets/styles';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/Feather';
import {Recipe} from 'src/redux/recipe/types';

export interface BarRecipeCardProps {
  recipe: Recipe;
  isBookmarked: boolean;
}

const BarRecipeCard = (props: BarRecipeCardProps) => {
  return (
    <View style={barRecipeCardProps.container}>
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
          source={require('../../assets/images/food.jpg')}
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
              onPress={() => console.log('icon pressed')}
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
              4.9
            </Text>
          </View>
        </View>
      </View>
    </View>
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
