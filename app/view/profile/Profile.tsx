import React, {useRef} from 'react';
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/Feather';
import {View, Animated, Easing, Text, Dimensions} from 'react-native';
import {Avatar, Button, ListItem} from 'react-native-elements';
import {SceneMap, TabView} from 'react-native-tab-view';
import CountsBar from '../../Container/Profile/CountsBar';
import SettingsTab from '../../Container/Profile/SettingsTab';

const Profile = ({navigation}: any) => {
  const toggleMenu = () => {
    console.log(componentRef.current?.state);
    componentRef.current?.openDrawer();
  };

  const componentRef = useRef<DrawerLayout>(null);
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

  const FirstRoute = () => (
    <View style={[{backgroundColor: '#ff4081', flex: 1}]}>
      <Text>asdf</Text>
    </View>
  );

  const SecondRoute = () => (
    <View style={[{backgroundColor: '#673ab7', flex: 1}]}>
      <Text>wtf</Text>
    </View>
  );

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'First'},
    {key: 'second', title: 'Second'},
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const initialLayout = {width: Dimensions.get('window').width};

  return (
    <DrawerLayout
      ref={componentRef}
      drawerWidth={responsiveWidth(66)}
      drawerPosition={'right'}
      drawerType={'slide'}
      contentContainerStyle={{
        backgroundColor: 'white',
      }}
      overlayColor={'#00000000'}
      edgeWidth={responsiveWidth(20)}
      renderNavigationView={SettingsTab}>
      {/* <TouchableWithoutFeedback onPress={() => aniamte()} style={{flex: 1}}>
        <View>
          <Animated.View style={animatedStyles} />
          <View style={{width: 100, height: 100, backgroundColor: 'red'}} />
        </View>
      </TouchableWithoutFeedback>

      <View style={{flex: 1}}>
        <GrapesSvg height={200} width={200} />
        <Animated.View style={animatedStyles} />
      </View> */}

      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          <ListItem
            title={'Steve Jobs'}
            titleStyle={{
              color: '#F8F8F8',
              fontFamily: 'Lato-Black',
              fontSize: 20,
            }}
            containerStyle={{
              backgroundColor: '#1A1A1A',
            }}
          />
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

          <View style={{padding: 20, flex: 1}}>
            <Text style={{color: '#F8F8F8', fontFamily: 'Lato-Regular'}}>
              Steve Jobs
            </Text>
            <Text style={{color: '#F8F8F8', fontFamily: 'Lato-Regular'}}>
              Inventor of the iPod Jobs
            </Text>
          </View>

          <View style={{padding: 10, flex: 1}}>
            <Button title="Edit Profile" type="outline" />
          </View>

          {/* Render menu icon button last */}
          <Icon
            name={'menu'}
            size={30}
            color={'#F8F8F8'}
            onPress={() => toggleMenu()}
            style={{position: 'absolute', top: 10, right: 10}}
          />
        </View>

        {/* <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
        /> */}
      </View>
    </DrawerLayout>
  );
};

export default Profile;
