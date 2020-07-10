import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  View,
  Vibration,
  Picker,
} from 'react-native';
import { Typography, Theme } from '../../assets/styles';
import { Input, Image } from 'react-native-elements';
import ImageSelector from '../../utils/ImageSelector/ImageSelector';
import InfoBar from '../../containers/Create/InfoBar';
import CreateIngredients from '../../components/Create/CreateIngredients/CreateIngredients';
import CreateDirections from '../../components/Create/CreateDirections/CreateDirections';
import Icon from 'react-native-vector-icons/Feather';
import Axios from 'axios';
const Create = ({ navigation }: any) => {
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
        style={{ marginRight: 10 }}
        onPress={() => console.log('save recipe...')}
      />
    ),
  });
  return (
    <SafeAreaView style={createStyle.contaier}>
      <ScrollView>
        {/* Pick recipe main image */}
        <ImageSelector  />
        {/* When set to true, the image file content will be available as a base64-encoded string in the data property. Hint: To use this string as an image source, use it like:  */}

        {/* <Image source={{uri: `data:${image.mime};base64,${image.data}`}} width={100} height={100} />  */}

        {/* <Image style={styles.thumb} source={{isStatic:true, uri:"/var/mobile/Containers/Data/Application/5938C9F8-0A9D-40DD-AB9F-CD2C772439E7/tmp/thumbimage_8gVFD"}} /> */}

        {/* {"cropRect": {"height": 1080, "width": 1080, "x": 0, "y": 660}, "height": 400, "mime": "image/jpeg", "modificationDate": "1593411699000", "path": "file:///storage/emulated/0/Android/data/com.ourrecipes/files/Pictures/558270a7-2be8-4336-931f-1a3cef9630c6.jpg", "size": 81681, "width": 400} */}
        {/* <Image source={{uri: `data:${image.mime};base64,${image.data}`}} width={100} height={100}/> */}


        {/* Pick recipe title */}
        <View style={{ marginHorizontal: 10 }}>
          <Input
            value={title}
            onChangeText={(text: string) => setTitle(text)}
            placeholder="Recipe Name"
            inputStyle={Typography.Typography.subheader}
          />
        </View>

        {/* Pick recipe info */}
        <InfoBar />
        {/* Category */}
        <Text style={createStyle.header}>Category</Text>
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
          <Picker.Item label="JavaScript" value="js" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>


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
