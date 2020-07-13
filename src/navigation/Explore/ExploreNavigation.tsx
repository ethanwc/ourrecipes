import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Create from '../../view/create/Create';
import DetailedRecipe from '../../containers/Recipe/DetailedRecipe';
import ExploreView from '../../view/explore/ExploreView';

const exploreStack = createStackNavigator();

//Explore Navigator
export function ExploreNavigation() {
  return (
    <exploreStack.Navigator>
      <exploreStack.Screen
        name="ExploreView"
        component={ExploreView}
        options={{headerShown: false}}
      />
      <exploreStack.Screen name="Recipe" component={DetailedRecipe} />
      <exploreStack.Screen name="CreateRecipe" component={Create} />
    </exploreStack.Navigator>
  );
}
