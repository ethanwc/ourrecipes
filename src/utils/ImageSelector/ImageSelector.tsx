import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {TouchableHighlight} from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-crop-picker';
// import ImagePicker from 'react-native-image-picker';

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
}

//Currently set to only lead to image gallery
const ImageSelector = (props: ImagePickerProps) => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState('');
  //show layout
  // const [showOverlay, setShowOverlay] = useState(false);

  //icon sizes
  const iconSize = responsiveWidth(100) / 3;

  // const pickGallery = () => {
  //   ImagePicker.openPicker({
  //     width: 400,
  //     height: 400,
  //     includeBase64: true,
  //     writeTempFile: false,

  //     // cropping: true,

  //   })
  //     .then((image: any) => {
  //       props.onImageSelected(image);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       // setShowOverlay(false);
  //     });
  // };

  // const pickCamera = () => {
  //   ImagePicker.openCamera({
  //     width: 400,
  //     height: 400,
  //     cropping: true,
  //   })
  //     .then((image) => {
  //       // setShowOverlay(false);
  //       props.onImageSelected(image);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       // setShowOverlay(false);
  //     });
  // };

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
        console.log(image);
        setLoading(true);

        console.log(image);

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
          })
          .catch((error: any) => {
            console.log('cloudinary error', error.message);
            setLoading(false);
          });
      })
      .catch((error: any) => {
        console.log(error);
      });

    // ImagePicker.showImagePicker(options, (response) => {
    //   // console.log('Response = ', response);

    //   if (response.didCancel) {
    //     console.log('User cancelled image picker');
    //   } else if (response.error) {
    //     console.log('ImagePicker Error: ', response.error);
    //   } else if (response.customButton) {
    //     console.log('User tapped custom button: ', response.customButton);
    //   } else {
    //     // const source = { uri: response.uri };
    //     // console.log(response.uri);
    //     // props.onImageSelected(response.uri);
    //     setLoading(true);

    //     console.log(response);

    //     var body = new FormData();
    //     let base64Img = `data:${response.type};base64,${response.data}`;
    //     body.append('file', base64Img);
    //     body.append('upload_preset', 'ajp1noec');

    //     Axios.post('https://api.cloudinary.com/v1_1/dk4gnl6ww/image/upload', body)
    //       .then((res: any) => {
    //         console.log(res.data.url);
    //         setLoading(false);
    //         setImage(res.data.url);
    //       })
    //       .catch((error: any) => {
    //         console.log('cloudinary error', error.message);
    //         setLoading(false);
    //       });

    //     // You can also display the image using data:
    //     // const source = { uri: 'data:image/jpeg;base64,' + response.data };

    //   }
    // });
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
    flex: 1,
    backgroundColor: Theme.Light.shadow,
    borderRadius: 15,
    padding: 5,
    margin: 5,
  },
  small: {
    width: responsiveScreenWidth(30),
    height: responsiveScreenWidth(30),
    resizeMode: 'stretch',
  },
  large: {
    width: '100%',
    height: responsiveScreenWidth(100),
    resizeMode: 'stretch',
  },
});

export default ImageSelector;
