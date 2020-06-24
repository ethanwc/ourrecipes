import React from 'react';
import {SafeAreaView, ScrollView, Text, StyleSheet, View} from 'react-native';
import ShoppingList from '../../components/ShoppingList/ShoppingList';
import {Typography} from '../../assets/styles';

/**
 * Shoppinglist page of app
 */
const ShoppingListView = ({navigation}: any) => {
  return (
        <ShoppingList/>
  );
};

const shoppingListStyle = StyleSheet.create({
  header: {
    margin: 10,
  },
});

export default ShoppingListView;
