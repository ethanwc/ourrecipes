import {StyleSheet, ColorPropType} from 'react-native';
import {
  graywhite,
  color1,
  color2,
  color3,
  color4,
  color5,
  color6,
  lightTheme,
} from './Colors';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

export const Recipe = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
  },
  miniContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  header: {
    fontSize: responsiveFontSize(4),
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
  },
  important: {
    fontSize: responsiveFontSize(3.8),
    fontFamily: 'Montserrat-Regular',
    color: color2,
  },
  body: {
    fontSize: responsiveFontSize(2),
    fontFamily: 'Montserrat-Regular',
    opacity: 0.4,
  },
  image: {
    width: responsiveWidth(100),
    height: responsiveHeight(50),
  },
  info: {
    paddingVertical: 5,
  },
  infoWrapper: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingHorizontal: 10,
  },
});
