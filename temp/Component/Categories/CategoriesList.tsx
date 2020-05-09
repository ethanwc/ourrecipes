import React from 'react';
import {View, SafeAreaView, FlatList, StyleSheet} from 'react-native';
import CategoryListCard from '../../Container/Category/CategoryListCard';
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
    uri: require(`../../assets/icons/category/fish.png`),
  },
  {
    title: 'Sushi',
    uri: require(`../../assets/icons/category/sushi-1.png`),
  },
  {
    title: 'Pie',
    uri: require(`../../assets/icons/category/pie.png`),
  },
  {
    title: 'Breakfast',
    uri: require(`../../assets/icons/category/pancakes-1.png`),
  },
];

const CategoriesList = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#FFFFFF',
      }}>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <CategoryListCard title={item.title} uri={item.uri} center={true} />
        )}
        keyExtractor={(item) => item.title}
        decelerationRate={0.798}
        showsHorizontalScrollIndicator={false}
        columnWrapperStyle={{
          marginHorizontal: responsiveWidth(2),
          marginVertical: responsiveWidth(2),
        }}
        numColumns={4}
      />
    </SafeAreaView>
  );
};

export default CategoriesList;
