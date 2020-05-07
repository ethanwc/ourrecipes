import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from 'react-native';
import {RecipeStyle} from '../../styles';
import {Rating, AirbnbRating} from 'react-native-ratings';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

import {
  color1,
  color2,
  color3,
  color4,
  color5,
  color6,
  graywhite,
} from '../../styles/Colors';

const Recipe = () => {
  //Toggle recipe as a favorite.
  const [isFavorite, setIsFavorite] = useState(false);

  //Favorite Icon
  const favoriteIcon = isFavorite ? (
    <Icon
      name="heart"
      size={30}
      color={color3}
      onPress={() => setIsFavorite(!isFavorite)}
      style={{position: 'absolute', right: 20, top: 10}}
    />
  ) : (
    <Icon
      name="heart-o"
      size={30}
      color={color1}
      onPress={() => setIsFavorite(!isFavorite)}
      style={{position: 'absolute', right: 20, top: 10}}
    />
  );

  return (
    <TouchableWithoutFeedback
      onLongPress={() => setIsFavorite(!isFavorite)}
      style={{
        width: responsiveWidth(70),
        marginLeft: 10,
        marginTop: 10,
        shadowOpacity: 0,
      }}>
      <View>
        <Image
          style={{
            width: responsiveWidth(70),
            height: responsiveWidth(50),
            marginHorizontal: 10,
            borderRadius: 5,
          }}
          source={require('../../assets/img/food1.jpg')}
        />
        {favoriteIcon}
        <View style={{flexDirection: 'row', paddingVertical: 5}}>
          <AirbnbRating showRating={false} size={14} />
          <Text
            style={{
              marginLeft: 5,
              fontFamily: 'Montserrat-Regular',
            }}>
            288 reviews
          </Text>
        </View>
        <Text style={{fontSize: 20, fontFamily: 'Montserrat-Regular'}}>
          Chicken Pot Pie
        </Text>
        <View style={{flexDirection: 'row', marginTop: 5}}>
          <Icon name={'clock-o'} size={20} />
          <Text
            style={{
              marginLeft: 5,
              fontFamily: 'Montserrat-Regular',
              fontSize: 16,
            }}>
            45 min
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
//todo:
//use logo for rating image
//https://www.npmjs.com/package/react-native-ratings
export default Recipe;
