import React from 'react';
import {View, FlatList} from 'react-native';
import CreateNewCard from '../../../containers/Create/CreateNewCard';

import {useDispatch, useSelector} from 'react-redux';
import {CreateRecipeState} from 'src/redux/createrecipe/types';
import {RootState} from 'src/redux';
import {addIngredient, removeIngredient} from '../../../redux/createrecipe/actions';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import {SwipeableRow} from '../../../utils/Swipeable/SwipeableRow';
import CreateIngredientCard from '../../../containers/Create/CreateIngredientCard';

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

  const dispatch = useDispatch();

  const createRecipe: CreateRecipeState = useSelector(
    (state: RootState) => state.CreateRecipeReducer,
  );

  return (
    <View>
      <View
        style={{
        }}>
        <FlatList
          data={createRecipe.ingredients}
          renderItem={({item, index}) => (
            <SwipeableRow
              child={<CreateIngredientCard />}
              onLeftButtonPress={() => console.log('left pressed')}
              onRightButtonPress={() => dispatch(removeIngredient(item))}
            />
          )}
          keyExtractor={(item) => 'putactualuuidhere'}
          decelerationRate={0.798}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <CreateNewCard
        onPress={() =>
          dispatch(addIngredient({amount: 1, id: uuidv4(), name: '', unit: ''}))
        }
      />
    </View>
  );
};

export default CreateIngredients;
