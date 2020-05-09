import React from 'react';
import {View, SafeAreaView, ScrollView, Text, StyleSheet} from 'react-native';
import Searchbar from '../../utils/Searchbar/Searchbar';
import Categories from '../../Component/Category/Categories';
import {Typography} from '../../assets/styles';
import Recipes from '../../Component/Recipe/Recipes';

const Explore = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* Searchbar */}
        <Searchbar />
        {/* Categories Component */}
        <View style={exploreStyle.header}>
          <Text style={Typography.Typography.header}>Categories</Text>
        </View>
        <Categories />
        {/* Breakfast */}
        <View style={exploreStyle.header}>
          <Text style={Typography.Typography.header}>Breakfast</Text>
        </View>
        <Recipes renderAuthor={true} />
        {/* Lunch */}
        <View style={exploreStyle.header}>
          <Text style={Typography.Typography.header}>Lunch</Text>
        </View>
        <Recipes renderAuthor={true} />
        {/* Dinner */}
        <View style={exploreStyle.header}>
          <Text style={Typography.Typography.header}>Dinner</Text>
        </View>
        <Recipes renderAuthor={true} />
      </ScrollView>
    </SafeAreaView>
  );
};

const exploreStyle = StyleSheet.create({
  header: {
    margin: 10,
  },
});

export default Explore;
