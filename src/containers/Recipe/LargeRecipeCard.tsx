import React from 'react';
import { View, StyleSheet, Text, Image, TouchableHighlight } from 'react-native';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Typography, Theme } from '../../assets/styles';
import ReviewCard from './ReviewCard';

export interface largeRecipeCardProps {
  renderAuthor: boolean;
  navigation: any;
  size: string;
}

const favoriteIconEmpty = (
  <Icon
    name="heart-o"
    size={24}
    style={{ position: 'absolute', right: 10, top: 10 }}
  />
);

const bookmarkIcon = (
  <Icon
    name="bookmark"
    size={24}
    color={Theme.Light.body}
    style={{ position: 'absolute', right: 10, top: 10 }}
    onPress={() => console.log('icon pressed')}
  />
);

const favoriteIcon = bookmarkIcon;

const LargeRecipeCard = (props: largeRecipeCardProps) => {
  return (
    <TouchableHighlight
      onPress={() =>
        props.navigation.navigate('Recipes', { screen: 'Recipe', params: {} })
      }
      underlayColor={'transparent'}>
      <View
        style={largeRecipeCardStyle.container}>
        <View>

          {/* // style={
        //   props.size === 'small'
        //     ? recipeCardStyle.containerSmall
        //     : recipeCardStyle.containerLarge
        // } */}
          <Image
            style={largeRecipeCardStyle.image}
            source={require('../../assets/images/food.jpg')}
          />
          {favoriteIcon}
          <View style={largeRecipeCardStyle.textContainer}>
            {/* Recipe Name */}
            <Text style={Typography.Typography.subheader}>Chicken Pot Pie</Text>
            {/* Recipe cook time, category */}
            <View style={{ ...largeRecipeCardStyle.horizontalRow, justifyContent: 'space-between' }}>
              <View style={largeRecipeCardStyle.horizontalRow}>
                <View style={largeRecipeCardStyle.horizontalRow}>
                  <Icon
                    name="clock-o"
                    size={20}
                    color={Theme.Light.headline}
                    style={{ marginRight: 5 }}
                  />
                  <Text style={Typography.Typography.body}>45 min</Text>
                </View>
                {/* Dot inbetween categories */}
                <View style={largeRecipeCardStyle.dot} />
                <Text style={Typography.Typography.body}>Korean BBQ</Text>
              </View>
              <View style={largeRecipeCardStyle.horizontalRow}>
              <Text style={Typography.Typography.subheader}>4.9</Text>
              <Icon
                  name="star"
                  style={{ color: 'gold', marginLeft: 5 }}
                  size={20}
                />
              </View>
            </View>

            {/* Recipe Author, Reviews */}
            <View
              style={{
                ...largeRecipeCardStyle.horizontalRow,
                justifyContent: 'space-between',
              }}>
              {props.renderAuthor ? (
                <Text style={Typography.Typography.subheadline}>Debra Boydd</Text>
              ) : null}

              <View style={largeRecipeCardStyle.horizontalRow}>
           
                <Text style={Typography.Typography.body}>42 reviews</Text>
              </View>
            </View>
          </View>
        </View>
        <ReviewCard />
        <ReviewCard />
      </View>
    </TouchableHighlight>
  );
};

const largeRecipeCardStyle = StyleSheet.create({
  containerFirst: {
    // marginLeft: 10,
  },
  container: {
    width: responsiveWidth(95),
    // marginRight: 10,
    backgroundColor: Theme.Light.shadow,
    margin: responsiveWidth(2.5),
    marginBottom: 0,
    // borderBottomWidth: .2,
  },
  textContainer: {
    padding: responsiveWidth(2.5),
    paddingBottom: 0,

    // paddingBottom: 5,
    // borderBottomWidth: .3,
    borderBottomColor: Theme.Light.body,


  },
  horizontalRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: responsiveWidth(95),
    height: responsiveWidth(65),
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

export default LargeRecipeCard;
