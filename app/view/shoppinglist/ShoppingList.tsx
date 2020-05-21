import React from 'react';
import {SafeAreaView, ScrollView, Text, StyleSheet} from 'react-native';
import {Typography} from '../../assets/styles';

/**
 * Shoppinglist page of app
 */
const ShoppingList = ({navigation}: any) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={Typography.Typography.header}>shoppinglist todo</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const shoppingListStyle = StyleSheet.create({
  header: {
    margin: 10,
  },
});

export default ShoppingList;
