import React from 'react';
import {View, StyleSheet, Text, Image, ImageURISource} from 'react-native';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import {Theme, Typography} from '../../assets/styles';

export interface categoryProps {
  title: string;
  uri: ImageURISource;
}

const CategoryCard = (props: categoryProps) => {
  return (
    <View style={categoryStyle.container}>
      <Image style={categoryStyle.icon} source={props.uri} />
      <Text style={Typography.Typography.body}>{props.title}</Text>
    </View>
  );
};

const categoryStyle = StyleSheet.create({
  container: {
    backgroundColor: Theme.Light.shadow,
    width: responsiveWidth(20),
    height: responsiveWidth(20),
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: responsiveWidth(1.25),
  },
  icon: {
    width: responsiveWidth(10),
    height: responsiveWidth(10),
  },
});

export default CategoryCard;
