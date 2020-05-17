import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, StyleSheet, View } from 'react-native';
import { Typography, Theme } from '../../assets/styles';
import { Input, Image } from 'react-native-elements';
import ImageSelector from '../../utils/ImageSelector/ImageSelector';
import InfoBar from '../../Container/Create/InfoBar';
import CreateIngredients from '../../Component/Create/CreateIngredients/CreateIngredients';
import CreateDirections from '../../Component/Create/CreateDirections/CreateDirections';

const Create = ({ navigation }: any) => {
  const [title, setTitle] = useState('');

  return (
    <SafeAreaView style={createStyle.contaier}>
      <ScrollView>
        {/* Pick recipe main image */}
        <ImageSelector onImageSelected={(uri: string) => console.log(uri)} />
        {/* Pick recipe title */}
        <View style={{marginHorizontal: 10}}>
          <Input
            value={title}
            onChangeText={(text: string) => setTitle(text)}
            placeholder="Recipe Name"
            inputStyle={Typography.Typography.subheader}
          />
        </View>

        {/* Pick recipe info */}
        <InfoBar />
        {/* Create recipe ingredients */}
        <Text style={createStyle.header}>Ingredients</Text>
        <CreateIngredients />
        {/* Pick recipe directions */}
        <Text style={createStyle.header}>Directions</Text>
        <CreateDirections />

      </ScrollView>
    </SafeAreaView>
  );
};

const createStyle = StyleSheet.create({
  contaier: {},
  titleStyle: {},
  header: {
    margin: 10,
    ...Typography.Typography.header,
  },
});

export default Create;
