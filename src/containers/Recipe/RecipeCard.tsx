import React from 'react';
import {View, StyleSheet, Text, Image, TouchableHighlight} from 'react-native';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Typography, Theme} from '../../assets/styles';
import {Recipe} from 'src/redux/recipe/types';

export interface recipeCardProps {
  isFirst: boolean;
  navigation: any;
  recipe: Recipe;
}

const favoriteIconEmpty = (
  <Icon
    name="bookmark"
    color={Theme.Light.shadow}
    size={24}
    style={{position: 'absolute', right: 10, top: 10}}
  />
);

const favoriteIconFilled = (
  <Icon
    name="bookmark"
    size={24}
    color={Theme.Light.caption}
    style={{position: 'absolute', right: 10, top: 10}}
    onPress={() => console.log('icon pressed')}
  />
);

const favoriteIcon = favoriteIconFilled;

const RecipeCard = (props: recipeCardProps) => {
  console.log(props.recipe.imageUrl);
  return (
    <TouchableHighlight
      onPress={() =>
        props.navigation.navigate('Recipes', {screen: 'Recipe', params: {}})
      }
      underlayColor={'transparent'}>
      <View
        style={
          props.isFirst
            ? {...recipeCardStyle.container, ...recipeCardStyle.containerFirst}
            : recipeCardStyle.container
        }>
        <Image
          style={recipeCardStyle.images}
          source={{uri: props.recipe.imageUrl}}
        />
        {favoriteIcon}
        <View style={recipeCardStyle.textContainer}>
          {/* Recipe Name */}
          <Text style={Typography.Typography.subheader}>
            {props.recipe.name}
          </Text>
          {/* Recipe cook time, category */}
          <View
            style={{
              ...recipeCardStyle.horizontalRow,
              justifyContent: 'space-between',
            }}>
            <View style={recipeCardStyle.horizontalRow}>
              <View style={recipeCardStyle.horizontalRow}>
                <Icon
                  name="clock-o"
                  size={20}
                  color={Theme.Light.headline}
                  style={{marginRight: 5}}
                />
                <Text style={Typography.Typography.body}>45 min</Text>
              </View>

              {/* Dot inbetween categories */}
              <View style={recipeCardStyle.dot} />
              <Text style={Typography.Typography.body}>Korean BBQ</Text>
            </View>
            <View style={recipeCardStyle.horizontalRow}>
              <Icon
                name="star"
                style={{color: 'gold', marginRight: 5}}
                size={20}
              />
              <Text style={Typography.Typography.body}>4.4</Text>
            </View>
          </View>

          {/* Recipe Author, Reviews */}
          <View
            style={{
              ...recipeCardStyle.horizontalRow,
              justifyContent: 'space-between',
            }}>
            <Text style={Typography.Typography.subheadline}>Debra Boydd</Text>

            <Text style={Typography.Typography.body}>42 reviews</Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const recipeCardStyle = StyleSheet.create({
  containerFirst: {
    marginLeft: 10,
  },
  container: {
    width: responsiveWidth(75),
    marginRight: 10,
    backgroundColor: Theme.Light.shadow,
  },
  textContainer: {
    padding: 5,
  },
  horizontalRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  images: {
    width: responsiveWidth(75),
    height: responsiveWidth(45),
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  dot: {
    backgroundColor: Theme.Light.body,
    borderRadius: 4,
    width: 4,
    height: 4,
    marginHorizontal: 5,
  },
});

export default RecipeCard;
