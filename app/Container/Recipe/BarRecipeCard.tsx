import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Theme, Typography } from '../../assets/styles';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/Feather';

export interface BarRecipeCardProps {
  review: string;
  rating: number;
  reviewTime: Date;
  image: string;
}

const BarRecipeCard = () => {
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
            flex: 1,
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
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
                alignItems: 'center',
              }}>
              <Text style={Typography.Typography.subheadline}>
                Chicken Pot Pie
              </Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={Typography.Typography.subheader}>4.9</Text>
                <Icon
                  name="star"
                  style={{ color: 'gold', marginHorizontal: 5 }}
                  size={26}
                />
              </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={Typography.Typography.body}>Korean BBQ</Text>
              <View style={barRecipeCardProps.dot} />
              <Text style={Typography.Typography.body}>Dinner</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon
                  name="clock"
                  size={16}
                  color={Theme.Light.headline}
                  style={{ marginRight: 5 }}
                />
                <Text style={Typography.Typography.body}>45 min</Text>
              </View>
              <Icon
                name="bookmark"
                style={{ color: Theme.Light.body, marginHorizontal: 5 }}
                size={26}
              />
            </View>
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
    borderRadius: 5,
    backgroundColor: Theme.Light.shadow,
    borderBottomColor: Theme.Light.body,
    borderBottomWidth: 0.3,
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
