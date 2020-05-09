import {StyleSheet} from 'react-native';
import {Light} from './Theme';

export const Typography = StyleSheet.create({
  header: {
    color: Light.headline,
    fontFamily: 'Lato-Bold',
    fontSize: 26,
  },
  subheader: {
    color: Light.headline,
    fontFamily: 'Lato-Bold',
    fontSize: 16,
  },
  headline: {},
  subheadline: {
    color: Light.caption,
    fontFamily: 'Lato-Bold',
    fontSize: 16,
  },
  body: {
    color: Light.headline,
    fontFamily: 'Lato-Bold',
    fontSize: 12,
  },
  subbody: {
    color: Light.body,
    fontFamily: 'Lato-Bold',
    fontSize: 12,
  },
});
