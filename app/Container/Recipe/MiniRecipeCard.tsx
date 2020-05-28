import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import {
  responsiveWidth,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {Theme, Typography} from '../../assets/styles';
import Icon from 'react-native-vector-icons/Feather';

const MiniRecipeCard = () => {
  return (
    <View style={miniRecipeCardStyle.container}>
      <Image
        style={miniRecipeCardStyle.image}
        source={require('../../assets/images/food.jpg')}
      />
      <Text style={Typography.Typography.subheader}>Chicken Pot Pie</Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={Typography.Typography.bodyflat}>4.4k Reviews</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={Typography.Typography.bodyflat}>4.9</Text>
          <Icon name="star" style={{color: 'gold', marginLeft: 5}} size={20} />
        </View>
      </View>
    </View>
  );
};

const miniRecipeCardStyle = StyleSheet.create({
  container: {
    width: responsiveWidth(47),
    backgroundColor: Theme.Light.shadow,
    marginHorizontal: responsiveWidth(1),
    marginBottom: responsiveWidth(5),
  },
  image: {
    width: responsiveWidth(47),
    height: responsiveWidth(40),
    marginBottom: 5,
    borderRadius: 5,
  },
});
export default MiniRecipeCard;
