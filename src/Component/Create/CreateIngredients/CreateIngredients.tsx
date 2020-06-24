import React from 'react';
import {View} from 'react-native';
import CreateIngredientCard from '../../../Container/Create/CreateIngredientCard';
import CreateNewCard from '../../../Container/Create/CreateNewCard';

import Swipe from './Swipe';
const CreateIngredients = () => {
  // const description = `${
  //     props.unit.charAt(0).toUpperCase() + props.unit.slice(1)
  //     } of ${props.ingredient.charAt(0).toUpperCase() + props.ingredient.slice(1)}`;

  // const convertInput = (text: string) => {
  //     try {
  //         const parsedInput = parser.parse(text);
  //         setInput(`${wordsToNumbers(parsedInput.amount)} ${parsedInput.unit} ${parsedInput.ingredient}`);
  //     }
  //     catch (error) {
  //         setInput(text);
  //     }
  // };

  return (
    <View>
      {/* <Swipe /> */}
      <CreateIngredientCard />
      <CreateIngredientCard />
      <CreateIngredientCard />
      <CreateNewCard onPress={() => console.log('add new card')} />
    </View>
  );
};

export default CreateIngredients;
