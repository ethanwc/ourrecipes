import React, {useRef} from 'react';
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/Feather';
import {View, Animated, Easing, TouchableWithoutFeedback} from 'react-native';
import {Avatar} from 'react-native-elements';
import GrapesSvg from '../../grapes.svg';
import {ListItem} from 'react-native-elements';

const list = [
  {
    name: 'Amy Farha',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President',
  },
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
  },
];

const settingsTab = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      {list.map((l, i) => (
        <ListItem
          key={i}
          leftAvatar={{source: {uri: l.avatar_url}}}
          title={l.name}
          subtitle={l.subtitle}
          bottomDivider
        />
      ))}
    </View>
  );
};

const Profile = (navigation: any) => {
  const componentRef = useRef<DrawerLayout>(null);
  let opacity = new Animated.Value(0);
  const toggleMenu = () => {
    console.log(componentRef.current?.state);
    componentRef.current?.openDrawer();
  };

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
      renderNavigationView={settingsTab}>
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

      <TouchableWithoutFeedback onPress={() => aniamte()} style={{flex: 1}}>
        <View>
          <Animated.View style={animatedStyles} />
          <View style={{width: 100, height: 100, backgroundColor: 'red'}} />
        </View>
      </TouchableWithoutFeedback>

      <View style={{flex: 1}}>
        <GrapesSvg height={200} width={200} />
        <Animated.View style={animatedStyles} />
      </View>
    </DrawerLayout>
  );
};

export default Profile;
