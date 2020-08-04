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

const Create = ({navigation}: any) => {
  const [category, setCategory] = useState('');
  const [ingredients, setIngredients] = useState(Array<Ingredient>());
  const [directions, setDirections] = useState(Array<Direction>());
  const [title, setTitle] = useState('');
  const [selectedValue, setSelectedValue] = useState('');

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
            value={title}
            onChangeText={(text: string) => setTitle(text)}
            placeholder="Recipe Name"
            inputStyle={Typography.Typography.subheader}
          />
        </View>
        {/* Pick recipe main image */}
        <View style={createStyle.imageWrapper}>
          <ImageSelector size={'large'} />
        </View>

        {/* Recipe description */}
        <View style={{marginHorizontal: 10}}>
          <Input
            value={title}
            onChangeText={(text: string) => setTitle(text)}
            placeholder="Description"
            inputStyle={Typography.Typography.subheader}
          />
        </View>

        {/* Pick recipe info */}
        <InfoBar />

        {/* Category */}
        <Text style={createStyle.header}>Category</Text>
        <Picker
          category={category}
          onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}>
          <Picker.Item label="Breakfast" value="b" />
          <Picker.Item label="Lunch" value="l" />
          <Picker.Item label="Dinner" value="d" />
        </Picker>

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
