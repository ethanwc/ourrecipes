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
import {Typography} from '../../assets/styles';
import Recipes from '../../Component/Recipe/Recipes';

/**
 * Explore page of app
 */
const Explore = ({navigation}: any) => {
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
        <Recipes renderAuthor={true} navigation={navigation} />
        {/* Lunch */}
        <View style={exploreStyle.header}>
          <Text style={Typography.Typography.header}>Lunch</Text>
        </View>
        <Recipes renderAuthor={true} navigation={navigation} />
        {/* Dinner */}
        <View style={exploreStyle.header}>
          <Text style={Typography.Typography.header}>Dinner</Text>
        </View>
        <Recipes renderAuthor={true} navigation={navigation} />
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
