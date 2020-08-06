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
import {
  responsiveScreenWidth,
  responsiveScreenHeight,
} from 'react-native-responsive-dimensions';
import {Ingredient, Direction} from '../../redux/recipe/types';
import Axios from 'axios';
import Categories from '../../components/Category/Categories';
import {useDispatch, useSelector} from 'react-redux';
import {CreateRecipeState} from 'src/redux/createrecipe/types';
import {RootState} from 'src/redux';
import {setDescription, setName} from '../../redux/createrecipe/actions';

const Create = ({navigation}: any) => {
  const dispatch = useDispatch();

  const createRecipe: CreateRecipeState = useSelector(
    (state: RootState) => state.CreateRecipeReducer,
  );

  console.log(createRecipe);

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
        onPress={() => console.log('save recipe...')}
      />
    ),
  });
  return (
    <SafeAreaView style={createStyle.contaier}>
      <ScrollView>
        {/* Pick recipe title */}
        <View style={{marginHorizontal: 10}}>
          <Input
            value={createRecipe.name}
            onChangeText={(text: string) => dispatch(setName(text))}
            placeholder="Recipe Name"
            inputStyle={Typography.Typography.subheader}
          />
        </View>
        {/* Pick recipe main image */}
        <View style={createStyle.imageWrapper}>
          <ImageSelector
            size={'large'}
            onImageSelected={(url: string) => console.log(url)}
          />
        </View>

        {/* Recipe description */}
        <View style={{marginHorizontal: 10}}>
          <Input
            value={createRecipe.description}
            onChangeText={(text: string) => dispatch(setDescription(text))}
            placeholder="Description"
            inputStyle={Typography.Typography.subheader}
          />
        </View>

        {/* Pick recipe info */}
        <InfoBar />

        {/* Category */}
        <Text style={createStyle.header}>Category</Text>

        <Categories />
        {/* Create recipe ingredients */}
        <Text style={createStyle.header}>Ingredients</Text>

        {/* Pick recipe directions */}
        <CreateIngredients />
        {/* <Text style={createStyle.header}>Directions</Text> */}
        <CreateDirections />
      </ScrollView>
    </SafeAreaView>
  );
};

const createStyle = StyleSheet.create({
  contaier: {},
  imageWrapper: {
    width: responsiveScreenWidth(90),
    height: responsiveScreenWidth(90),
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: Theme.Light.shadow,
  },
  titleStyle: {},
  header: {
    margin: 10,
    ...Typography.Typography.header,
  },
});

export default Create;
