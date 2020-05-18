import React, {useRef} from 'react';
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/Feather';
import {View, Text, StyleSheet} from 'react-native';
import {Avatar, Button, ListItem} from 'react-native-elements';
import CountsBar from '../../Container/Profile/CountsBar';
import SettingsTab from '../../Container/Profile/SettingsTab';
import {Theme} from '../../assets/styles';
import Description from '../../Container/Profile/Description';

const Profile = (props: any) => {
  const componentRef = useRef<DrawerLayout>(null);

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
      edgeWidth={responsiveWidth(30)}
      renderNavigationView={SettingsTabWrapper}>
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          <ListItem
            title={'Steve Jobs'}
            titleStyle={{
              color: Theme.Light.headline,
              fontFamily: 'Lato-Black',
              fontSize: 20,
            }}
            containerStyle={{
              backgroundColor: Theme.Light.background,
            }}
          />
          {/* Header bar */}
          <View style={{flexDirection: 'row', paddingHorizontal: 10}}>
            <Avatar
              rounded
              size={'large'}
              source={{
                uri:
                  'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
              }}
              showAccessory
            />
            {/* Recipes and followers information */}
            <CountsBar />
          </View>

          {/* Description Area */}
          <Description />

          {/* Render menu icon button last */}
          <Icon
            name={'menu'}
            size={30}
            color={Theme.Light.headline}
            onPress={() => toggleMenu()}
            style={{position: 'absolute', top: 10, right: 10}}
          />
        </View>
      </View>
    </DrawerLayout>
  );
};

const profileStyle = StyleSheet.create({
  container: {},
});

export default Profile;
