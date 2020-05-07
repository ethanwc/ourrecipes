import {StyleSheet} from 'react-native';
import {lightTheme} from './Colors';

export const lightThemeText = StyleSheet.create({
  mainHeader: {
    color: lightTheme.textPrimary,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 18,
  },
  footnoteHeader: {
    fontFamily: 'Montserrat-Regular',
    color: lightTheme.textFootnote,
    fontSize: 24,
  },
  footnoteBody: {
    fontFamily: 'Montserrat-Regular',
    color: lightTheme.textFootnote,
    fontSize: 16,
  },
  bodyImporantText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
  },
  bodyUnimportantText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    opacity: 0.6,
  },
});
