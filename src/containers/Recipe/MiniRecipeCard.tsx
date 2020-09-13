import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/Feather';
import {Theme, Typography} from '../../assets/styles';
import {TouchableHighlight} from 'react-native-gesture-handler';

export interface MiniRecipe {
  id: string;
  name: string;
  imageUrl: string;
  reviewCount: string;
  reviewRating: string;
}
export interface MiniRecipeCardProps {
  navigation: any;
  miniRecipe: MiniRecipe;
}

const MiniRecipeCard = (props: MiniRecipeCardProps) => {
  return (
    <TouchableHighlight
      onPress={() =>
        //todo: nav to recipe with recipe id
        props.navigation.navigate('Recipes', {
          screen: 'Recipe',
          params: {
            recipe: props.miniRecipe.id,
          },
        })
      }>
      <View style={miniRecipeCardStyle.container}>
        <Image
          style={miniRecipeCardStyle.image}
          source={{uri: props.miniRecipe.imageUrl}}
        />
        <Text style={Typography.Typography.subheader}>
          {props.miniRecipe.name}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={
              Typography.Typography.bodyflat
            }>{`${props.miniRecipe.reviewCount} reviews`}</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={Typography.Typography.bodyflat}>
              {props.miniRecipe.reviewRating}
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
