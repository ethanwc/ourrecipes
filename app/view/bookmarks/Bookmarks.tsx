import React from 'react';
import {SafeAreaView, ScrollView, Text, StyleSheet} from 'react-native';
import {Typography} from '../../assets/styles';

/**
 * Create page of app
 */
const Create = ({navigation}: any) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={Typography.Typography.header}>todo</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const createStyle = StyleSheet.create({
  header: {
    margin: 10,
  },
});

export default Create;
