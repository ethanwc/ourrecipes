import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Typography} from '../../assets/styles';
import {User} from 'src/redux/user/types';
import {RootState} from 'src/redux';
import {useSelector, useDispatch} from 'react-redux';
import ProfileImageSelector from '../../utils/ImageSelector/ProfileImageSelector';
import {setUserPhotoAsync} from '../../redux/user/actions';

export interface prifleInfoProps {
  name: string;
  location: string;
}

const ProfileInfo = () => {
  const userSession: any = useSelector(
    (state: RootState) => state.UserReducer.session,
  );

  const userInfo: User = useSelector(
    (state: RootState) => state.UserReducer.user,
  );

  const dispatch = useDispatch();

  return (
    <View style={profileInfoStyle.container}>
      <ProfileImageSelector
        imageUrl={userInfo.photo}
        onImageSelected={(uri: string) => dispatch(setUserPhotoAsync(uri))}
      />

      <View style={profileInfoStyle.wrapper}>
        {/* TODO: Location picking with react-native-geocoder */}
        <Text style={profileInfoStyle.name}>{userSession.name}</Text>
        {/* <Text style={profileInfoStyle.location}>Seattle, WA</Text> */}
      </View>
    </View>
  );
};

const profileInfoStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    marginTop: 15,
  },
  wrapper: {
    marginTop: 5,
    margin: 10,
  },
  name: {
    ...Typography.Typography.headerflat,
  },
  location: {
    ...Typography.Typography.headline,
  },
});

export default ProfileInfo;
