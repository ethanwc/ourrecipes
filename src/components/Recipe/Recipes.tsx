import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import RecipeCard from '../../containers/Recipe/RecipeCard';

const DATA = [
  {title: 'steve'},
  {title: 'jobs'},
  {title: 'is'},
  {title: 'dead'},
];

export interface recipesProps {
  renderAuthor: boolean;
  navigation: any;
}

const Recipes = (props: recipesProps) => {
  return (
    <SafeAreaView>
      <FlatList
        horizontal
        data={DATA}
        renderItem={({item, index}) => (
          <RecipeCard isFirst={index === 0} renderAuthor={props.renderAuthor} navigation={props.navigation} size={'small'}/>
        )}
        keyExtractor={(item) => item.title}
        decelerationRate={0.798}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Recipes;
