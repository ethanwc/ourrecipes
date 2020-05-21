import React from 'react';
import {SafeAreaView, ScrollView, Text, StyleSheet} from 'react-native';
import {Typography} from '../../assets/styles';

/**
 * Bookmarks page of app
 */
const Bookmarks = ({navigation}: any) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={Typography.Typography.header}>bookmarks todo</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const bookmarksStyle = StyleSheet.create({
  header: {
    margin: 10,
  },
});

export default Bookmarks;
