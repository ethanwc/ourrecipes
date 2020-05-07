import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export interface ingredientProps {
  quantity: string;
  item: string;
}

const style = StyleSheet.create({
  card: {
    margin: 10,
  },
});

export const Ingredient = (props: ingredientProps) => {
  return (
    <View style={style.card}>
      <Text>{props.item}</Text>
    </View>
  );
};
