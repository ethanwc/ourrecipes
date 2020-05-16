import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, StyleSheet, View } from 'react-native';
import { Typography, Theme } from '../../assets/styles';
import { Input, Image } from 'react-native-elements';
import ImageSelector from '../../utils/ImageSelector/ImageSelector';
import InfoBar from '../../Container/Create/InfoBar';
import CreateIngredients from '../../Component/Create/CreateIngredients/CreateIngredients';
import CreateDirections from '../../Component/Create/CreateDirections/CreateDirections';

/**
 * Create page of app
 */

//temp: keyboard types 'default' | 'email-address' | 'numeric' | 'phone-pad' | 'number-pad' | 'decimal-pad';

const Create = ({ navigation }: any) => {
  const [title, setTitle] = useState('');

  return (
    <SafeAreaView style={createStyle.contaier}>
      <ScrollView>
        {/* Pick recipe title */}
        <Input
          value={title}
          onChangeText={(text: string) => setTitle(text)}
          placeholder="Title"
          inputStyle={Typography.Typography.header}
          leftIcon={{ type: 'feather', name: 'pen-tool' }}
        />
        {/* Pick recipe info */}
        <InfoBar />
        {/* Pick recipe main image */}
        <ImageSelector onImageSelected={(uri: string) => console.log(uri)} />
        {/* Create recipe ingredients */}
        <Text style={createStyle.header}>Ingredients</Text>
        <CreateIngredients />
        {/* Pick recipe directions */}
        <Text style={createStyle.header}>Directions</Text>
        <CreateDirections/> 

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
