import React from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import Searchbar from '../../utils/Searchbar/Searchbar';
import Categories from '../../Component/Category/Categories';
import {Typography, Theme} from '../../assets/styles';
import Recipes from '../../Component/Recipe/Recipes';
import Icon from 'react-native-vector-icons/Feather';

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
      <TouchableOpacity
        style={exploreStyle.createButton}
        onPress={() =>
          navigation.navigate('Recipes', {screen: 'CreateRecipe', params: {}})
        }>
        <Icon name={'plus'} size={40} color={Theme.Light.caption} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const exploreStyle = StyleSheet.create({
  header: {
    margin: 10,
  },
  createButton: {
    borderRadius: 100,
    backgroundColor: Theme.Light.background,
    position: 'absolute',
    bottom: 15,
    right: 15,
    padding: 10,
  },
});

export default Explore;
