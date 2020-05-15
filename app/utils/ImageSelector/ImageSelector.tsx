import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {Overlay} from 'react-native-elements';
import ImagePicker from 'react-native-image-crop-picker';
import {Theme} from '../../assets/styles';
import {View, StyleSheet} from 'react-native';
import {responsiveWidth} from 'react-native-responsive-dimensions';

export interface imagePickerProps {
  onImageSelected: Function;
}

const ImageSelector = (props: imagePickerProps) => {
  //show layout
  const [showOverlay, setShowOverlay] = useState(false);

  //icon sizes
  const iconSize = responsiveWidth(100) / 3;

  const pickGallery = () => {
    ImagePicker.openPicker({
      width: 400,
      height: 400,
      cropping: true,
    }).then((image) => {
      props.onImageSelected(image);
      setShowOverlay(false);
    });
  };

  const pickCamera = () => {
    ImagePicker.openCamera({
      width: 400,
      height: 400,
      cropping: true,
    }).then((image) => {
      props.onImageSelected(image);
      setShowOverlay(false);
    });
  };

  return (
    <TouchableHighlight
      style={imageSelectorStyle.container}
      underlayColor={'transparent'}
      onPress={() => setShowOverlay(true)}>
      <View>
        <Icon name={'image'} size={iconSize} color={Theme.Light.headline} />
        <Overlay
          isVisible={showOverlay}
          overlayStyle={{backgroundColor: Theme.Light.shadow}}
          onBackdropPress={() => setShowOverlay(false)}>
          <View style={imageSelectorStyle.overlay}>
            <Icon
              name={'camera'}
              size={iconSize}
              color={Theme.Light.headline}
              onPress={() => pickCamera()}
            />
            <Icon
              name={'image'}
              size={iconSize}
              color={Theme.Light.headline}
              style={{marginLeft: 5}}
              onPress={() => pickGallery()}
            />
          </View>
        </Overlay>
      </View>
    </TouchableHighlight>
  );
};

const imageSelectorStyle = StyleSheet.create({
  container: {
    width: responsiveWidth(100),
    height: responsiveWidth(100),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.Light.shadow,
    borderRadius: 15,
  },
  overlay: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 15,
    paddingLeft: 5,
    backgroundColor: Theme.Light.shadow,
  },
});

export default ImageSelector;
