import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/FontAwesome';
import {lightTheme} from '../../styles/Colors';
import {Typography, Colors} from '../../styles/index';
import {AirbnbRating} from 'react-native-ratings';

const RecipeCardBlank = () => {
  return (
    <View style={recipeCardBlankStyle.container}>
      <Icon name={'plus'} size={30} />
    </View>
  );
};

const recipeCardBlankStyle = StyleSheet.create({
  container: {
    margin: 10,
    padding: 40,
    marginTop: 0,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: lightTheme.textFootnote,
    width: responsiveWidth(75),
    height: responsiveWidth(45),
  },
});

export default RecipeCardBlank;
