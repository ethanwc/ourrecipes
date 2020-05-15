import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, StyleSheet, View } from 'react-native';
import { Typography, Theme } from '../../assets/styles';
import { Input, Image } from 'react-native-elements';
import ImageSelector from '../../utils/ImageSelector/ImageSelector';
import InfoBar from '../../Container/Create/InfoBar';
/**
 * Create page of app
 */

//temp: keyboard types 'default' | 'email-address' | 'numeric' | 'phone-pad' | 'number-pad' | 'decimal-pad';

const Create = ({ navigation }: any) => {
  const [title, setTitle] = useState('');

  return (
    <SafeAreaView style={createStyle.contaier}>
      <ScrollView>
        <View style={createStyle.titleStyle}>
          <Input
            value={title}
            onChangeText={(text: string) => setTitle(text)}
            placeholder="Title"
            inputStyle={Typography.Typography.header}
            leftIcon={{ type: 'feather', name: 'pen-tool' }}
          />
        </View>
        <ImageSelector onImageSelected={(uri: string) => console.log(uri)} />
        <InfoBar />
      </ScrollView>
    </SafeAreaView>
  );
};

const createStyle = StyleSheet.create({
  contaier: {},
  titleStyle: {},
});

export default Create;
