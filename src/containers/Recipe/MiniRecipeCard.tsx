import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/Feather';
import {Theme, Typography} from '../../assets/styles';
import {Recipe} from 'src/redux/recipe/types';
import {TouchableHighlight} from 'react-native-gesture-handler';

export interface MiniRecipeCardProps {
  navigation: any;
  recipe: Recipe;
}

const MiniRecipeCard = (props: MiniRecipeCardProps) => {
  return (
    <TouchableHighlight onPress={() => console.log("nav to recipe")}>
      <View style={miniRecipeCardStyle.container}>
        <Image
          style={miniRecipeCardStyle.image}
          source={{uri: props.recipe.imageUrl}}
        />
        <Text style={Typography.Typography.subheader}>{props.recipe.name}</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={
              Typography.Typography.bodyflat
            }>{`${props.recipe.reviewCount} reviews`}</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={Typography.Typography.bodyflat}>
              {props.recipe.reviewRating}
            </Text>
            <Icon
              name="star"
              style={{color: 'gold', marginLeft: 5}}
              size={20}
            />
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const miniRecipeCardStyle = StyleSheet.create({
  container: {
    width: responsiveWidth(48),
    backgroundColor: Theme.Light.shadow,
    marginHorizontal: responsiveWidth(1),
    marginBottom: responsiveWidth(5),
    color: Theme.Light.shadow,
  },
  image: {
    width: responsiveWidth(48),
    height: responsiveWidth(40),
    marginBottom: 5,
    borderRadius: 5,
  },
});
export default MiniRecipeCard;
