import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Button,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {DetailedRecipeStyle} from '../../../styles';
import {Typography} from '../../../styles';
import {Rating, AirbnbRating} from 'react-native-ratings';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  color1,
  color2,
  color3,
  color4,
  color5,
  color6,
  graywhite,
  lightTheme,
} from '../../../styles/Colors';

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {UnderlineBar} from '../../../Component/Utils/UnderlineBar';
import {Ingredient} from '../Ingredient/Ingredient';

import {BlurView, VibrancyView} from '@react-native-community/blur';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  absolute: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: responsiveWidth(50),
    height: responsiveWidth(50),
  },
});

const DetailedRecipe = () => {
  //Toggle showing ingredients or directions.
  const [isIngredients, setIsIngredients] = useState(true);
  //Toggle recipe as a favorite.
  const [isFavorite, setIsFavorite] = useState(false);

  //Favorite Icon
  const favoriteIcon = isFavorite ? (
    <Icon
      name="heart"
      size={30}
      color={color3}
      onPress={() => setIsFavorite(!isFavorite)}
    />
  ) : (
    <Icon
      name="heart-o"
      size={30}
      color={color3}
      onPress={() => setIsFavorite(!isFavorite)}
    />
  );

  //Ingredients
  const ingredients = (
    <SafeAreaView>
      <FlatList
        data={[
          {key: '1', data: '2 sticks - Unsalted Butter'},
          {key: '2', data: '1 cup - Flour'},
          {key: '3', data: '1 lb - Chicken'},
        ]}
        renderItem={({item}) => <Ingredient item={item.data} quantity={'1'} />}
      />
    </SafeAreaView>
  );

  //Directions
  const directions = (
    <FlatList
      data={[
        {key: '1', data: 'Preheat Oven'},
        {key: '2', data: 'Mix stuff together'},
        {key: '3', data: 'Bake'},
      ]}
      renderItem={({item}) => (
        <Text>
          {item.key}. {item.data}
        </Text>
      )}
    />
  );

  //set ingredients or directions based on hook
  const infoRender = isIngredients ? ingredients : directions;

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={DetailedRecipeStyle.Recipe.mainContainer}>
          <View>
            <View>
              <Image
                style={{
                  width: responsiveHeight(50),
                  height: responsiveHeight(50),
                }}
                key={'blurryImage'}
                source={require('../../../assets/img/food1.jpg')}
              />
              <BlurView
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  width: responsiveHeight(50),
                  height: responsiveHeight(50),
                }}
                blurType="light"
                blurAmount={1}
                reducedTransparencyFallbackColor="white"
              />
            </View>

            <View
              style={{
                ...DetailedRecipeStyle.Recipe.miniContainer,
                marginVertical: 15,
              }}>
              <Text style={Typography.lightThemeText.mainHeader}>
                Chicken Pot Pie
              </Text>
              <View style={{alignItems: 'flex-end'}}>
                <Text style={Typography.lightThemeText.bodyImporantText}>
                  4.4k
                </Text>
                <Text style={Typography.lightThemeText.bodyImporantText}>
                  Cooked
                </Text>
              </View>
            </View>

            <View
              style={{
                ...DetailedRecipeStyle.Recipe.miniContainer,
                paddingBottom: 15,
              }}>
              <View style={{flexDirection: 'row'}}>
                <AirbnbRating showRating={false} size={12} />
                <Text
                  style={{
                    ...Typography.lightThemeText.bodyUnimportantText,
                    marginLeft: 5,
                  }}>
                  (288 reviews)
                </Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                {favoriteIcon}
                <Icon name={'share'} size={30} style={{marginLeft: 10}} />
              </View>
            </View>

            {/* Underline */}
            <View
              style={{
                backgroundColor: lightTheme.textFootnote,
                width: responsiveWidth(95),
                height: 1,
                opacity: 0.2,
                marginHorizontal: responsiveWidth(2.5),
              }}
            />

            {/* Servings, Prep, Cook - bar */}
            <View
              style={{
                ...DetailedRecipeStyle.Recipe.miniContainer,
                paddingTop: 15,
                paddingVertical: 15,
                marginBottom: 5,
              }}>
              <View>
                <Text style={Typography.lightThemeText.bodyUnimportantText}>
                  Servings
                </Text>
                <Text style={Typography.lightThemeText.footnoteHeader}>2</Text>
              </View>
              <View>
                <Text style={Typography.lightThemeText.bodyUnimportantText}>
                  Prep Time
                </Text>
                <Text style={Typography.lightThemeText.footnoteHeader}>
                  25m
                </Text>
              </View>

              <View>
                <Text style={Typography.lightThemeText.bodyUnimportantText}>
                  Cook Time
                </Text>
                <Text style={Typography.lightThemeText.footnoteHeader}>
                  1hr
                </Text>
              </View>
            </View>

            <View
              style={{
                paddingHorizontal: 15,
                marginBottom: 5,
                alignItems: 'flex-start',
              }}>
              <Text style={DetailedRecipeStyle.Recipe.body}>Description</Text>
              <Text style={Typography.lightThemeText.bodyImporantText}>
                This delicious meat based meal is made from the finest chicken
                in the entire world. Just one slice is all it takes to win any
                prize or conquer any goal in the entire world. While this may be
                a typing challenge to see how much I can make up in one minute,
                I assure you the power of the pie is real.
              </Text>
            </View>

            {/* Ingredients and Directions section */}
            <View
              style={{
                flexDirection: 'row',
              }}>
              <UnderlineBar
                title={'Ingredients'}
                isActive={isIngredients}
                onPress={() => setIsIngredients(true)}
              />
              <UnderlineBar
                title={'Directions'}
                isActive={!isIngredients}
                onPress={() => setIsIngredients(false)}
              />
            </View>

            <View
              style={{
                paddingHorizontal: 15,
                marginBottom: 5,
                alignItems: 'flex-start',
              }}>
              {infoRender}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailedRecipe;
