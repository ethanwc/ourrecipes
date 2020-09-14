import React, {useEffect} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Searchbar from '../../utils/Searchbar/SearchBar';
import Categories from '../../components/Category/Categories';
import {Typography, Theme} from '../../assets/styles';
import Recipes from '../../components/Recipe/Recipes';
import Icon from 'react-native-vector-icons/Feather';
import {RecipeState} from 'src/redux/recipe/types';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'src/redux';
import {RecipesState} from '../../redux/recipes/types';
import {getRecipesInfo} from '../../redux/recipes/actions';

/**
 * Explore page of app
 */
const Explore = ({navigation}: any) => {
  const dispatch = useDispatch();
  const recipesState: RecipesState = useSelector(
    (state: RootState) => state.RecipesReducer,
  );

  useEffect(() => {
    dispatch(getRecipesInfo());
  }, []);

  // console.log(recipeState);

  if (!recipesState.recipes)
    return <ActivityIndicator size="large" color={Theme.Light.caption} />;

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        {/* Searchbar */}
        <Searchbar />
        {/* Categories Component */}
        <View style={exploreStyle.header}>
          <Text style={Typography.Typography.header}>Categories</Text>
        </View>
        <Categories
          onCategoryPressed={(category: string) => console.log(category)}
        />
        {/* Breakfast */}
        <View style={exploreStyle.header}>
          <Text style={Typography.Typography.header}>Recipes</Text>
        </View>

        <Recipes recipes={recipesState.recipes} navigation={navigation} />

        {/* Lunch */}
        {/* <View style={exploreStyle.header}>
          <Text style={Typography.Typography.header}>Lunch</Text>
        </View> */}
        {/* <Recipes navigation={navigation} /> */}
        {/* Dinner */}
        {/* <View style={exploreStyle.header}>
          <Text style={Typography.Typography.header}>Dinner</Text>
        </View>
        <Recipes navigation={navigation} /> */}
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
