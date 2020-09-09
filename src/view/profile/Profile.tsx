import React, {useRef, useEffect} from 'react';
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/Feather';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {Avatar, Button, ListItem} from 'react-native-elements';
import CountsBar from '../../containers/Profile/CountsBar';
import SettingsTab from '../../containers/Profile/SettingsTab';
import {Theme, Typography} from '../../assets/styles';
import ProfileInfo from '../../containers/Profile/ProfileInfo';
import ProfileBrowser from '../../components/Profile/ProfileBrowser';
import {User} from 'src/redux/user/types';
import {useSelector} from 'react-redux';
import {RootState} from 'src/redux';

//Profile view of the app
const Profile = (props: any) => {
  const componentRef = useRef<DrawerLayout>(null);

  const userInfo: User = useSelector(
    (state: RootState) => state.UserReducer.user,
  );

  useEffect(() => {
    
    
    
  }, [])

  const toggleMenu = () => {
    console.log(componentRef.current?.state);
    componentRef.current?.openDrawer();
  };

  const SettingsTabWrapper = () => {
    return <SettingsTab navigation={props.navigation} />;
  };

  return (
    <DrawerLayout
      ref={componentRef}
      drawerWidth={responsiveWidth(66)}
      drawerPosition={'right'}
      drawerType={'slide'}
      contentContainerStyle={{
        backgroundColor: Theme.Light.shadow,
      }}
      overlayColor={'#00000000'}
      edgeWidth={responsiveWidth(15)}
      renderNavigationView={SettingsTabWrapper}>
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          <ListItem
            containerStyle={{
              backgroundColor: Theme.Light.background,
            }}
          />
          {/* Header bar */}
          <ProfileInfo />
          {/* Recipes and followers information */}
          <CountsBar
            navigation={props.navigation}
            followers={userInfo.followers.length}
            following={userInfo.following.length}
            recipes={userInfo.recipes.length}
          />
        </View>
        <View style={{flex: 2}}>
          {/* Tab view for recipes, photos, and reviews */}
          <ProfileBrowser navigation={props.navigation} />
        </View>
        {/* Render menu icon button last */}
        <Icon
          name={'menu'}
          size={30}
          color={Theme.Light.headline}
          onPress={() => toggleMenu()}
          style={{position: 'absolute', top: 10, right: 10}}
        />
      </View>
    </DrawerLayout>
  );
};
const profileStyle = StyleSheet.create({
  container: {},
});

export default Profile;
