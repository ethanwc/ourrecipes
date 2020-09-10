import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  View,
  Vibration,
  Picker,
} from 'react-native';
import {Typography, Theme} from '../../assets/styles';
import {Input, Image} from 'react-native-elements';
import ImageSelector from '../../utils/ImageSelector/ImageSelector';
import InfoBar from '../../containers/Create/InfoBar';
import CreateIngredients from '../../components/Create/CreateIngredients/CreateIngredients';
import CreateDirections from '../../components/Create/CreateDirections/CreateDirections';
import Icon from 'react-native-vector-icons/Feather';
import {responsiveScreenWidth} from 'react-native-responsive-dimensions';
import Axios from 'axios';
import Categories from '../../components/Category/Categories';
import {useDispatch, useSelector} from 'react-redux';
import {CreateRecipeState} from 'src/redux/createrecipe/types';
import {RootState} from 'src/redux';
import {
  setDescription,
  setName,
  setCategory,
  setImage,
} from '../../redux/createrecipe/actions';
import {createNewRecipe} from '../../redux/createrecipe/reducers';
import {jsonToGraphQLQuery} from 'json-to-graphql-query';

const Create = ({navigation}: any) => {
  const dispatch = useDispatch();

  const createRecipe: CreateRecipeState = useSelector(
    (state: RootState) => state.CreateRecipeReducer,
  );

  /**
   * Checks the recipe input matches requirements
   */
  const handleCreateRecipe = () => {
    dispatch(
      createNewRecipe({
        ...createRecipe,
        ...{creationDate: new Date().toLocaleString()},
      }),
    );

    // if (
    //   !createRecipe.name ||
    //   !createRecipe.description ||
    //   !createRecipe.category ||
    //   !createRecipe.prepTime ||
    //   !createRecipe.cookTime ||
    //   !createRecipe.servingSize
    // ) {
    //   console.log('Please fill out all fields');
    // } else if (createRecipe.ingredients.length < 2) {
    //   console.log('Recipe must have atleast two ingredients');
    // } else if (createRecipe.directions.length < 1) {
    //   console.log('Recipe must have atleast one direction');
    //   console.log(createRecipe.directions);
    // } else if (!createRecipe.imageUrl) {
    //   console.log('Recipe must have an image');
    //   console.log(createRecipe.directions);
    // } else {
    //   dispatch(
    //     createNewRecipe({
    //       ...createRecipe,
    //       ...{creationDate: new Date().toLocaleString()},
    //     }),
    //   );
    // }
  };

  //update nav title
  navigation.setOptions({
    headerShown: true,
    headerTitle: '',
    headerRight: () => (
      <Icon
        name={'check'}
        size={30}
        color={Theme.Light.headline}
        style={{marginRight: 10}}
        onPress={() => handleCreateRecipe()}
      />
    ),
  });
  return (
    <SafeAreaView>
      <ScrollView>
        {/* Pick recipe title */}
        <View style={{marginHorizontal: 10}}>
          <Input
            value={createRecipe.name}
            onChangeText={(text: string) => dispatch(setName(text))}
            placeholder="Recipe Name"
            inputStyle={createStyle.inputText}
          />
        </View>
        {/* Pick recipe main image */}
        <View style={createStyle.imageWrapper}>
          <ImageSelector
            size={'large'}
            onImageSelected={(url: string) => dispatch(setImage(url))}
          />
        </View>

        {/* Recipe description */}
        <View style={{marginHorizontal: 10}}>
          <Input
            value={createRecipe.description}
            onChangeText={(text: string) => dispatch(setDescription(text))}
            placeholder="Description"
            inputStyle={createStyle.inputText}
          />
        </View>

        {/* Pick recipe info */}
        <InfoBar />

        {/* Category */}
        <Text style={createStyle.header}>Category</Text>

        <Categories
          activeCategory={createRecipe.category}
          onCategoryPressed={(category: string) =>
            dispatch(setCategory(category))
          }
        />
        {/* Create recipe ingredients */}
        <Text style={createStyle.header}>Ingredients</Text>

        {/* Pick recipe directions */}
        <CreateIngredients />
        <Text style={createStyle.header}>Directions</Text>
        <CreateDirections />
      </ScrollView>
    </SafeAreaView>
  );
};

const createStyle = StyleSheet.create({
  imageWrapper: {
    width: responsiveScreenWidth(90),
    height: responsiveScreenWidth(90),
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: Theme.Light.shadow,
  },
  header: {
    margin: 10,
    ...Typography.Typography.header,
  },
  inputText: {...Typography.Typography.subheader, color: Theme.Light.caption},
});

export default Create;
