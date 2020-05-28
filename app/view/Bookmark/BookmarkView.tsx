import React from 'react';
import {SafeAreaView, ScrollView, Text, StyleSheet} from 'react-native';
import {Typography} from '../../assets/styles';
import LargeRecipeCard from '../../Container/Recipe/LargeRecipeCard';
import BarRecipeCard from '../../Container/Recipe/BarRecipeCard';

/**
 * Bookmarks page of app
 */
const BookmarkView = ({navigation}: any) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <BarRecipeCard />
        <BarRecipeCard />
        <BarRecipeCard />
        <BarRecipeCard />
        <BarRecipeCard />
        <BarRecipeCard />
        <BarRecipeCard />
        <BarRecipeCard />
        <BarRecipeCard />
        <BarRecipeCard />
        <BarRecipeCard />
        <BarRecipeCard />
        <BarRecipeCard />
        <BarRecipeCard />
        <BarRecipeCard />

      </ScrollView>
    </SafeAreaView>
  );
};

const bookmarksStyle = StyleSheet.create({
  header: {
    margin: 10,
  },
});

export default BookmarkView;
