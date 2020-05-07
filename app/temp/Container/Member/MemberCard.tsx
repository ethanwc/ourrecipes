import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Colors, Typography} from '../../styles';

export interface memberCardProps {}

const MemberCard = (props: memberCardProps) => {
  return (
    <View style={memberCardStyle.container}>
      <Text style={Typography.lightThemeText.bodyImporantText}>Jeff Bezos</Text>
    </View>
  );
};

const memberCardStyle = StyleSheet.create({
  container: {
    margin: 5,
  },
});

export default MemberCard;
