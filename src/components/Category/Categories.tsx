import React from 'react';
import {SafeAreaView, FlatList, StyleSheet} from 'react-native';
import CategoryCard, { CategoryProps } from '../../containers/Category/CategoryCard';

const DATA = [
  {
    id: '1',
    title: 'Dessert',
    uri: require(`../../assets/icons/category/bread-1.png`),
  },
  {
    id: '2',
    title: 'Bread',
    uri: require(`../../assets/icons/category/bread-1.png`),
  },
  {
    id: '3',
    title: 'Pizza',
    uri: require(`../../assets/icons/category/pizza-2.png`),
  },
  {
    id: '4',
    title: 'Sandwich',
    uri: require(`../../assets/icons/category/sandwich-1.png`),
  },
  {
    id: '5',
    title: 'Seafood',
    uri: require(`../../assets/icons/category/sushi-1.png`),
  },
  {
    id: '6',
    title: 'Breakfast',
    uri: require(`../../assets/icons/category/pancakes-1.png`),
  },
];

export interface CategoriesProps {
  onCategoryPressed: Function;
  activeCategory: string;
}

const Categories = (props: CategoriesProps) => {
  return (
    <SafeAreaView>
      <FlatList
        horizontal
        data={DATA}
        renderItem={({item}) => (
          <CategoryCard
            id={item.id}
            title={item.title}
            uri={item.uri}
            active={props.activeCategory === item.title}
            onCategoryPressed={(category: string) =>
              props.onCategoryPressed(category)
            }
          />
        )}
        keyExtractor={(item) => item.title}
        decelerationRate={0.798}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Categories;
