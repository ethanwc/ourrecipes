import {StyleSheet} from 'react-native';
import {graywhite} from './Colors';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

export const Recipe = StyleSheet.create({
  container: {},
  header: {
    fontSize: responsiveFontSize(4),
    textAlign: 'center',
    margin: 10,
    fontFamily: 'Montserrat-Regular',
  },
  important: {
    fontSize: responsiveFontSize(2.5),
    fontFamily: 'Montserrat-Regular',
  },
  body: {
    fontSize: responsiveFontSize(2),
    textAlign: 'center',
    paddingVertical: 3,
    opacity: 0.6,
    fontFamily: 'Montserrat-Regular',
  },
  image: {
    borderRadius: 15,
    width: responsiveWidth(90),
    height: responsiveHeight(45),
  },
  info: {
    alignItems: 'center',
    alignContent: 'space-between',
    justifyContent: 'space-between',

    flexDirection: 'row',
  },
  infoWrapper: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomEndRadius: 15,
    borderBottomLeftRadius: 15,
  },
});
