import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ImageURISource,
  TouchableHighlight,
} from 'react-native';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import {Theme, Typography} from '../../assets/styles';

export interface CategoryProps {
  id: string;
  title: string;
  uri: ImageURISource;
  onCategoryPressed: Function;
  active: boolean;
}

const CategoryCard = (props: CategoryProps) => {
  return (
    <TouchableHighlight
      onPress={() => props.onCategoryPressed(props.title)}
      style={categoryStyle.container}>
      <View
        style={{
          ...categoryStyle.container,
          backgroundColor: props.active
            ? Theme.Light.caption
            : Theme.Light.background,
        }}>
        <Image style={categoryStyle.icon} source={props.uri} />
        <Text style={Typography.Typography.body}>{props.title}</Text>
      </View>
    </TouchableHighlight>
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
