import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import RecipeCard from '../../Container/Recipe/RecipeCard';

const DATA = [
  {title: 'steve'},
  {title: 'jobs'},
  {title: 'is'},
  {title: 'dead'},
];

export interface recipesProps {
  renderAuthor: boolean;
}

const Recipes = (props: recipesProps) => {
  return (
    <SafeAreaView>
      <FlatList
        horizontal
        data={DATA}
        renderItem={({item, index}) => (
          <RecipeCard isFirst={index === 0} renderAuthor={props.renderAuthor} />
        )}
        keyExtractor={(item) => item.title}
        decelerationRate={0.798}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Recipes;
