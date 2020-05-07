import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import Categories from '../Categories/Categories';
import Recipes from '../Recipes/Recipes';
import SearchBar from '../Utils/SearchBar';

const Explore = () => {
  return (
    <SafeAreaView style={exploreStyle.container}>
      <ScrollView>
        <View style={exploreStyle.container}>
          <SearchBar />
          <View style={exploreStyle.subheaderContainer}>
            <Text style={exploreStyle.headerText}>Categories</Text>
            <Text style={exploreStyle.viewAllText}>View All ></Text>
          </View>

          <Categories />
          <View style={exploreStyle.subheaderContainer}>
            <Text style={exploreStyle.headerText}>Breakfast</Text>
            <Text style={exploreStyle.viewAllText}>View All ></Text>
          </View>

          <Recipes renderAuthor={true} />

          <View style={exploreStyle.subheaderContainer}>
            <Text style={exploreStyle.headerText}>Dinner</Text>
            <Text style={exploreStyle.viewAllText}>View All ></Text>
          </View>

          <Recipes renderAuthor={true} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const exploreStyle = StyleSheet.create({
  container: {
    // padding: 15,
    backgroundColor: '#FFFFFF',
  },
  subheaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  headerText: {
    marginTop: 1,
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold',
    marginLeft: 15,
  },
  viewAllText: {
    marginTop: 1,
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold',
    color: '#FF6501',
  },
});

export default Explore;
