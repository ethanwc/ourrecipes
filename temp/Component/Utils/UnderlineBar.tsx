import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import {graywhite, color2, color1, color3, lightTheme} from '../../styles/Colors';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

export interface UnderlineBarProps {
  title: string;
  onPress: Function;
  isActive: boolean;
}

const style = StyleSheet.create({
  barActive: {
    alignSelf: 'center',
    fontSize: responsiveFontSize(3),
    fontFamily: 'Montserrat-Regular',
    color: lightTheme.textFootnote,
    paddingTop: 15,
    marginTop: 15,
    paddingBottom: 15,
    backgroundColor: lightTheme.backgroundPrimary,
    borderBottomColor: '#FF6501',
    borderBottomWidth: 2,
    textAlign: 'center',
    textAlignVertical: 'center',
    flex: 1,
  },
  barInactive: {
    fontSize: responsiveFontSize(3),
    fontFamily: 'Montserrat-Regular',
    paddingTop: 15,
    marginTop: 15,
    paddingBottom: 15,
    backgroundColor: lightTheme.backgroundPrimary,
    flex: 1,
  },
});

export const UnderlineBar = (props: UnderlineBarProps) => {
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#FF6501"
      style={props.isActive ? style.barActive : style.barInactive}
      onPress={() => props.onPress()}>
      <Text
        style={{
          textAlign: 'center',
          textAlignVertical: 'center',
          color: props.isActive ? '#FF6501' : color1,
        }}>
        {props.title}
      </Text>
    </TouchableHighlight>
  );
};
