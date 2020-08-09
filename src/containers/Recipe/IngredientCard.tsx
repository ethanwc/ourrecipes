import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Theme, Typography} from '../../assets/styles';
import {Ingredient} from 'src/redux/recipe/types';

export interface ingredientCardProps {
  ingredient: Ingredient;
}

const IngredientCard = (props: ingredientCardProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const checkStatus = isChecked ? 'check-circle' : 'circle';
  const description = `${
    props.ingredient.unit.charAt(0).toUpperCase() +
    props.ingredient.unit.slice(1)
  } of ${
    props.ingredient.name.charAt(0).toUpperCase() +
    props.ingredient.name.slice(1)
  }`;

  return (
    <TouchableHighlight onPress={() => setIsChecked(!isChecked)}>
      <View style={ingredientCardStyle.container}>
        <Icon name={checkStatus} size={30} color={Theme.Light.caption} />
        <Text
          style={{...Typography.Typography.subheader, paddingHorizontal: 15}}>
          {props.ingredient.amount}
        </Text>
        <Text style={Typography.Typography.subheader}>{description}</Text>
      </View>
    </TouchableHighlight>
  );
};

const ingredientCardStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: Theme.Light.shadow,
    borderBottomWidth: 0.3,
    borderBottomColor: Theme.Light.body,
  },
});

export default IngredientCard;
