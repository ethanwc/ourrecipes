import React from 'react';
import {View, StyleSheet, Text, Image, ImageURISource} from 'react-native';
import {lightTheme} from '../../styles/Colors';
import {responsiveWidth} from 'react-native-responsive-dimensions';

export interface categoryProps {
  title: string;
  uri: ImageURISource;
  center: boolean;
}

const CategoryListCard = (props: categoryProps) => {
  return (
    <View style={categoryStyle.container}>
      <Image style={categoryStyle.icon} source={props.uri} />
      <Text style={categoryStyle.iconText}>{props.title}</Text>
    </View>
  );
};

const categoryStyle = StyleSheet.create({
  container: {
    backgroundColor: lightTheme.backgroundPrimary,
    width: responsiveWidth(20),
    height: responsiveWidth(20),
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: responsiveWidth(2),
  },
  icon: {
    width: responsiveWidth(10),
    height: responsiveWidth(10),
  },
  iconText: {
    marginTop: 1,
    fontSize: 12,
    opacity: 0.8,
    fontFamily: 'Montserrat-Regular',
  },
});

export default CategoryListCard;
