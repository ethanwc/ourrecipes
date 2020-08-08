import React from 'react';
import {View, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CreateDirectionCard from '../../../containers/Create/CreateDirectionCard';
import CreateNewCard from '../../../containers/Create/CreateNewCard';
import {SwipeableRow} from '../../../utils/Swipeable/SwipeableRow';
import {addIngredient, addDirection, removeDirection} from '../../../redux/createrecipe/actions';
import {CreateRecipeState} from '../../../redux/createrecipe/types';
import {RootState} from '../../../redux';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import {Direction} from '../../../redux/recipe/types';
import {ADD_ITEM} from '../../../redux/shoppinglist/types';

const CreateDirections = () => {
  const dispatch = useDispatch();

  const createRecipe: CreateRecipeState = useSelector(
    (state: RootState) => state.CreateRecipeReducer,
  );
  return (
    <View>
      <View style={{}}>
        <FlatList
          data={createRecipe.directions}
          renderItem={({item, index}) => (
            <SwipeableRow
              child={<CreateDirectionCard order={item.step} />}
              onLeftButtonPress={() => console.log('left pressed')}
              onRightButtonPress={() => dispatch(removeDirection(item))}
            />
          )}
          keyExtractor={(item) => 'putactualuuidhere'}
          decelerationRate={0.798}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <CreateNewCard
        onPress={() =>
          dispatch(
            addDirection({
              id: uuidv4(),
              instruction: 'Take a cup of potato juice and whisk it',
              step: createRecipe.directions.length + 1,
              imageUrl: 'https:google.com/image',
            }),
          )
        }
      />
    </View>
  );
};

export default CreateDirections;
