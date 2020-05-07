import React from 'react';
import {View, SafeAreaView, FlatList} from 'react-native';
import CategoryCard from '../../Container/Category/CategoryCard';
import {Recipe} from 'app/src/styles/DetailedRecipe';
import {responsiveWidth} from 'react-native-responsive-dimensions';

const DATA = [
  {
    title: 'Dessert',
    uri: require(`../../assets/icons/category/cupcake-1.png`),
  },
  {
    title: 'Bread',
    uri: require(`../../assets/icons/category/bread-1.png`),
  },
  {
    title: 'Pizza',
    uri: require(`../../assets/icons/category/pizza-2.png`),
  },
  {
    title: 'Sandwich',
    uri: require(`../../assets/icons/category/sandwich-1.png`),
  },
  {
    title: 'Seafood',
    uri: require(`../../assets/icons/category/sushi-1.png`),
  },
  {
    title: 'Breakfast',
    uri: require(`../../assets/icons/category/pancakes-1.png`),
  },
];

const Categories = () => {
  return (
    <SafeAreaView>
      <FlatList
        horizontal
        data={DATA}
        renderItem={({item}) => (
          <CategoryCard title={item.title} uri={item.uri} />
        )}
        keyExtractor={(item) => item.title}
        decelerationRate={0.798}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Categories;
