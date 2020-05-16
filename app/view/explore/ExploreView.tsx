import React from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  Button,
} from 'react-native';
import Searchbar from '../../utils/Searchbar/Searchbar';
import Categories from '../../Component/Category/Categories';
import { Typography } from '../../assets/styles';
import Recipes from '../../Component/Recipe/Recipes';

/**
 * Explore page of app
 */
const Explore = ({ navigation }: any) => {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* Searchbar */}
        <Searchbar />
        {/* Categories Component */}
        <Text style={exploreStyle.header}>Categories</Text>
        <Categories />
        {/* Breakfast */}
        <Text style={exploreStyle.header}>Breakfast</Text>
        <Recipes renderAuthor={true} navigation={navigation} />
        {/* Lunch */}
        <Text style={exploreStyle.header}>Lunch</Text>
        <Recipes renderAuthor={true} navigation={navigation} />
        {/* Dinner */}
        <Text style={exploreStyle.header}>Dinner</Text>
        <Recipes renderAuthor={true} navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};

const exploreStyle = StyleSheet.create({
  header: {
    margin: 10,
    ...Typography.Typography.header,
  },
});

export default Explore;
