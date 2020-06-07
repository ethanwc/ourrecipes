import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {TouchableHighlight} from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-crop-picker';
import {Theme} from '../../assets/styles';
import {View, StyleSheet} from 'react-native';
import {responsiveWidth} from 'react-native-responsive-dimensions';

export interface imagePickerProps {
  onImageSelected: Function;
}

//Currently set to only lead to image gallery
const ImageSelector = (props: imagePickerProps) => {
  //show layout
  // const [showOverlay, setShowOverlay] = useState(false);

  //icon sizes
  const iconSize = responsiveWidth(100) / 3;

  const pickGallery = () => {
    ImagePicker.openPicker({
      width: 400,
      height: 400,
      cropping: true,
    })
      .then((image) => {
        // setShowOverlay(false);
        props.onImageSelected(image);
      })
      .catch((error) => {
        console.log(error);
        // setShowOverlay(false);
      });
  };

  const pickCamera = () => {
    ImagePicker.openCamera({
      width: 400,
      height: 400,
      cropping: true,
    })
      .then((image) => {
        // setShowOverlay(false);
        props.onImageSelected(image);
      })
      .catch((error) => {
        console.log(error);
        // setShowOverlay(false);
      });
  };

  return (
    <TouchableHighlight
      style={imageSelectorStyle.container}
      underlayColor={'transparent'}
      onPress={() => pickGallery()}>
      <Icon
        name={'image'}
        size={40}
        color={Theme.Light.headline}
      />
    </TouchableHighlight>
  );
};

const imageSelectorStyle = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.Light.shadow,
    borderRadius: 15,
    padding: 5,
    margin: 5,
  },
});

export default ImageSelector;
