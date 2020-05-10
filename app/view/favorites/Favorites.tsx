import React from 'react';
import {SafeAreaView, ScrollView, Text, StyleSheet} from 'react-native';
import {Typography} from '../../assets/styles';

/**
 * Favorites page of app
 */
const Favorites = ({navigation}: any) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={Typography.Typography.header}>todo</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const favoritesStyle = StyleSheet.create({
  header: {
    margin: 10,
  },
});

export default Favorites;
