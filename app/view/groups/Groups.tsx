import React from 'react';
import {SafeAreaView, ScrollView, Text, StyleSheet} from 'react-native';
import {Typography} from '../../assets/styles';

/**
 * Groups page of app
 */
const Groups = ({navigation}: any) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={Typography.Typography.header}>todo</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const groupsStyle = StyleSheet.create({
  header: {
    margin: 10,
  },
});

export default Groups;
