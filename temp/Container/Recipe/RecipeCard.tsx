import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/FontAwesome';
import {lightTheme} from '../../styles/Colors';
import {Typography, Colors} from '../../styles/index';
import {AirbnbRating} from 'react-native-ratings';

export interface recipeCardProps {
  isFirst: boolean;
  renderAuthor: boolean;
}

const favoriteIconEmpty = (
  <Icon
    name="heart-o"
    size={24}
    color={Colors.lightTheme.textPrimary}
    style={{position: 'absolute', right: 10, top: 10}}
  />
);

const favoriteIconFilled = (
  <Icon
    name="heart"
    size={24}
    color={'red'}
    style={{position: 'absolute', right: 10, top: 10}}
  />
);

const favoriteIcon = favoriteIconFilled;

const RecipeCard = (props: recipeCardProps) => {
  return (
    <View
      style={
        props.isFirst
          ? {...recipeCardStyle.container, ...recipeCardStyle.containerFirst}
          : recipeCardStyle.container
      }>
      <Image
        style={recipeCardStyle.image}
        source={require('../../assets/img/food1.jpg')}
      />
      {favoriteIcon}
      <View style={recipeCardStyle.textContainer}>
        {/* Recipe Name */}
        <Text style={Typography.lightThemeText.mainHeader}>
          Crispy Chicken Sandwich
        </Text>
        {/* Recipe cook time, category */}
        <View style={recipeCardStyle.horizontalRow}>
          <View style={recipeCardStyle.horizontalRow}>
            <Icon
              name="clock-o"
              size={20}
              color={lightTheme.textSecondary}
              style={{marginRight: 5}}
            />
            <Text style={Typography.lightThemeText.bodyImporantText}>
              45 min
            </Text>
          </View>

          {/* Dot inbetween categories */}
          <View style={recipeCardStyle.dot} />
          <Text style={Typography.lightThemeText.bodyUnimportantText}>Korean BBQ</Text>
        </View>
        {/* Recipe Author, Reviews */}
        <View
          style={{
            ...recipeCardStyle.horizontalRow,
            justifyContent: 'space-between',
          }}>
          {props.renderAuthor ? (
            <Text style={Typography.lightThemeText.footnoteBody}>
              Debra Boydd
            </Text>
          ) : null}
          <View style={recipeCardStyle.horizontalRow}>
            <Icon
              name="star"
              style={{color: 'gold', marginRight: 5}}
              size={20}
            />

            <Text style={Typography.lightThemeText.bodyImporantText}>
              42 reviews
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const recipeCardStyle = StyleSheet.create({
  containerFirst: {
    marginLeft: 15,
  },
  container: {
    width: responsiveWidth(75),
    marginRight: 15,
    backgroundColor: lightTheme.backgroundPrimary,
  },
  textContainer: {
    padding: 5,
  },
  horizontalRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: responsiveWidth(75),
    height: responsiveWidth(45),
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  dot: {
    backgroundColor: lightTheme.textPrimary,
    borderRadius: 4,
    width: 4,
    height: 4,
    marginHorizontal: 5,
  },
});

export default RecipeCard;
