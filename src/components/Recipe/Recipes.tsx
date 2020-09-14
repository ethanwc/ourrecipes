import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import RecipeCard from '../../containers/Recipe/RecipeCard';
import {Recipe} from 'src/redux/recipe/types';

const DATA = [
  {title: 'steve'},
  {title: 'jobs'},
  {title: 'is'},
  {title: 'dead'},
];

export interface recipesProps {
  navigation: any;
  recipes: Recipe[];
}

const Recipes = (props: recipesProps) => {
  return (
    <SafeAreaView>
      <FlatList
        horizontal
        data={props.recipes}
        renderItem={({item, index}) => (
          <RecipeCard
            recipe={item}
            isFirst={index === 0}
            navigation={props.navigation}
          />
        )}
        keyExtractor={(item) => item.id}
        decelerationRate={0.798}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Recipes;
