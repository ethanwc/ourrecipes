import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {TouchableHighlight} from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-crop-picker';
import {Theme} from '../../assets/styles';
import {View, StyleSheet, ActivityIndicator, Image} from 'react-native';
import {
  responsiveWidth,
  responsiveScreenWidth,
  responsiveScreenHeight,
  useResponsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import Axios from 'axios';

export interface ImagePickerProps {
  size: string;
  onImageSelected: Function;
}

//Currently set to only lead to image gallery
const ImageSelector = (props: ImagePickerProps) => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState('');

  const options = {
    title: 'Select Avatar',
    customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  const pickGallery = () => {
    ImagePicker.openPicker({
      width: 1000,
      height: 1000,
      cropping: true,
      includeBase64: true,
      writeTempFile: false,
    })
      .then((image: any) => {
        // console.log(image);
        setLoading(true);

        // console.log(image);

        var body = new FormData();
        let base64Img = `data:${image.type};base64,${image.data}`;
        body.append('file', base64Img);
        body.append('upload_preset', 'ajp1noec');

        Axios.post(
          'https://api.cloudinary.com/v1_1/dk4gnl6ww/image/upload',
          body,
        )
          .then((res: any) => {
            console.log(res.data.url);
            setLoading(false);
            setImage(res.data.url);
            props.onImageSelected(res.data.url);
          })
          .catch((error: any) => {
            console.log('cloudinary error', error.message);
            setLoading(false);
          });
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  return (
    <TouchableHighlight
      style={imageSelectorStyle.container}
      underlayColor={'transparent'}
      onPress={() => pickGallery()}>
      {loading ? (
        <ActivityIndicator size="large" color={Theme.Light.caption} />
      ) : image ? (
        <Image
          style={
            props.size === 'large'
              ? imageSelectorStyle.large
              : imageSelectorStyle.small
          }
          source={{uri: image}}
        />
      ) : (
        <Icon name={'image'} size={40} color={Theme.Light.headline} />
      )}
    </TouchableHighlight>
  );
};

const imageSelectorStyle = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.Light.shadow,
    borderRadius: 15,
  },
  small: {
    // width: '100%',
    width: responsiveScreenWidth(20),
    height: responsiveScreenWidth(20),
    resizeMode: 'stretch',
  },
  large: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
});

export default ImageSelector;
