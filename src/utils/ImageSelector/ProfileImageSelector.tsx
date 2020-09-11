import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {TouchableHighlight} from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-crop-picker';
import {Theme} from '../../assets/styles';
import {View, StyleSheet, ActivityIndicator, Image} from 'react-native';
import Axios from 'axios';
import {Avatar} from 'react-native-elements';

export interface ImagePickerProps {
  imageUrl: string | undefined;
  onImageSelected: Function;
}

/**
 * Sets the profile image
 */
const ProfileImageSelector = (props: ImagePickerProps) => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(props.imageUrl);

  const pickGallery = () => {
    ImagePicker.openPicker({
      width: 1000,
      height: 1000,
      cropping: true,
      includeBase64: true,
      writeTempFile: false,
    })
      .then((image: any) => {
        setLoading(true);

        var body = new FormData();
        let base64Img = `data:${image.type};base64,${image.data}`;
        body.append('file', base64Img);
        body.append('upload_preset', 'ajp1noec');

        Axios.post(
          'https://api.cloudinary.com/v1_1/dk4gnl6ww/image/upload',
          body,
        )
          .then((res: any) => {
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
    <View style={ProfileimageSelectorStyle.container}>
      {loading ? (
        <ActivityIndicator size="large" color={Theme.Light.caption} />
      ) : (
        <Avatar
          rounded
          size={'large'}
          onPress={() => pickGallery()}
          source={{uri: image}}
          showAccessory
        />
      )}
    </View>
  );
};

const ProfileimageSelectorStyle = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.Light.shadow,
    borderRadius: 15,
  },
});

export default ProfileImageSelector;
