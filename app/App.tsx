import React, {
  useRef,
  ForwardRefRenderFunction,
  PropsWithChildren,
  useState,
} from 'react';
import {
  Button,
  View,
  Text,
  Animated,
  StyleSheet,
  Easing,
  TouchableWithoutFeedback,
} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

import Icon from 'react-native-vector-icons/Feather';
import GrapesSvg from './grapes.svg';
import { Avatar } from 'react-native-elements';


import TabNav from './TabNav';

function HomeScreen(navigation: any) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen(navigation: any) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const renderDrawer = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <Text style={{color: '#F8F8F8'}}>Menu Item Here</Text>
      <Text style={{color: '#F8F8F8'}}>Menu Item Here</Text>
      <Text style={{color: '#F8F8F8'}}>Menu Item Here</Text>
      <Text style={{color: '#F8F8F8'}}>Menu Item Here</Text>
    </View>
  );
};

let opacity = new Animated.Value(0);

const aniamte = () => {
  opacity.setValue(0);
  Animated.timing(opacity, {
    toValue: 1,
    duration: 700,
    easing: Easing.elastic(2),
    useNativeDriver: false,
  }).start();
};

const size = opacity.interpolate({
  inputRange: [0, 1],
  outputRange: [0, 80],
});

const box = {
  marginTop: 32,
  borderRadius: 4,
  backgroundColor: '#61dafb',
};

const animatedStyles = [
  {
    ...box,
    opacity,
    width: size,
    height: size,
  },
];

const Drawer = createDrawerNavigator();

export default function App() {
  const componentRef = useRef<DrawerLayout>(null);

  const toggleMenu = () => {
    componentRef.current?.openDrawer();
  };

  function SlideDrawer(navigation: any) {
    return (
      <DrawerLayout
        ref={componentRef}
        drawerWidth={responsiveWidth(66)}
        drawerPosition={'right'}
        drawerType={'slide'}
        contentContainerStyle={{
          backgroundColor: '#1A1A1A',
        }}
        overlayColor={'#00000000'}
        edgeWidth={responsiveWidth(50)}
        renderNavigationView={renderDrawer}>
        <Icon
          name={'menu'}
          size={30}
          color={'#F8F8F8'}
          onPress={() => toggleMenu()}
          style={{position: 'absolute', top: 15, right: 15}}
        />

        <View>
          <Avatar
            size="small"
            rounded
            icon={{name: 'user', type: 'font-awesome'}}
            onPress={() => console.log('Works!')}
            activeOpacity={0.7}
            containerStyle={{flex: 2, marginLeft: 20, marginTop: 115}}
          />
        </View>

        {/* <TouchableWithoutFeedback onPress={() => aniamte()} style={{flex: 1}}>
          <Animated.View style={animatedStyles} />
        </TouchableWithoutFeedback> */}

        <View style={{flex: 1}}>
          <GrapesSvg height={200} width={200} />
        </View>
      </DrawerLayout>
    );
  }

  const animatedValue = new Animated.Value(0);

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={TabNav} />
        <Drawer.Screen name="Drawer" component={SlideDrawer} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
  },
  button: {
    height: 60,
    backgroundColor: '#ededed',
    borderRadius: 4,
    marginTop: 10,
    paddingTop: 20,
    fontSize: 18,
  },
  block: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
  },
});
