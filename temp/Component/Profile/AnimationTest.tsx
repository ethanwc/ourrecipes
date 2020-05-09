import React, {Component, useState, useRef} from 'react';
import {
  Animated,
  TouchableWithoutFeedback,
  Text,
  View,
  StyleSheet,
  Easing,
  Button,
  TouchableNativeFeedback,
} from 'react-native';
import {
  responsiveScreenWidth,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  PanGestureHandler,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import {abs} from 'react-native-reanimated';
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';

const AnimationTest = (props: any) => {
  //   let spinvalue = new Animated.Value(0);

  //   let loginanimation = Animated.loop(
  //     Animated.timing(spinvalue, {
  //       toValue: 1,
  //       duration: 3000,
  //       easing: Easing.inOut(Easing.cubic),
  //       useNativeDriver: true,
  //     }),
  //   );

  let moveValue = new Animated.ValueXY({x: 0, y: 0});
  let moveValue2 = new Animated.ValueXY({x: 100, y: 0});

  //   let moveValue = new Animated.Value(0);
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

  const aniamte2 = () => {
    Animated.timing(moveValue, {
      toValue: {x: -100, y: 0},
      duration: 700,
      easing: Easing.elastic(2),
      useNativeDriver: false,
    }).start();
  };

  let moveanimation = Animated.spring(moveValue, {
    toValue: {x: 2530, y: 10},
    useNativeDriver: true,
  });

  const move = () => {
    moveanimation.start();
  };

  // let asdf = Animated.decay

  //spring, decay, timing

  const size = opacity.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 80],
  });

  //   const animatedStyles = [
  //     styles.box,
  //     {
  //       opacity,
  //       width: size,
  //       height: size,
  //     },
  //   ];
  let moveitmoveit = new Animated.ValueXY({x: 0, y: 0});

  const showMenu = useRef(true);

  const openMenu = () => {
    Animated.timing(moveitmoveit, {
      toValue: {x: -responsiveWidth(66), y: 0},
      duration: 1200,
      easing: Easing.in(Easing.bounce),
      useNativeDriver: false,
    }).start();
  };

  const closeMenu = () => {
    Animated.timing(moveitmoveit, {
      toValue: {x: 0, y: 0},
      useNativeDriver: false,
    }).start();
  };

  const why = useRef(0);

  const movefast = (absx: any) => {
    let newx = absx;

    let updatedX = newx - why.current;
    //left boundary
    if (updatedX < -responsiveWidth(66)) updatedX = responsiveWidth(-66);
    //right boundary
    if (updatedX > responsiveWidth(0)) updatedX = responsiveWidth(0);

    Animated.timing(moveitmoveit, {
      toValue: {
        x: updatedX,
        y: 0,
      },
      duration: 0,
      delay: 0,
      //   easing: Easing.elastic(2),
      useNativeDriver: false,
    }).start();
  };

  const checkDrawer = (absx: any) => {
    let newx = absx;
    let updatedX = newx - why.current;

    //if drawer is open more than 50 percent open fully
    if (updatedX > -responsiveWidth(33)) closeMenu();
    //close drawer, not opened enough
    else openMenu();
  };

  const updateTouchState = (event: any) => {
    why.current = event.x;

    const shouldClose = event.state === 5;

    if (shouldClose) checkDrawer(event.absoluteX);
  };
  const renderDrawer = () => {
    return (
      <View>
        <Text>I am in the drawer!</Text>
      </View>
    );
  };
  return (
    <GestureHandlerRootView>
      <View style={{flex: 1}}>
        <DrawerLayout
          drawerWidth={200}
          drawerType="front"
          drawerBackgroundColor="blue"
          renderNavigationView={renderDrawer}>
          <View>
            <Text>Hello, it's me</Text>
          </View>
        </DrawerLayout>
      </View>
    </GestureHandlerRootView>
    // <View style={styles.container}>
    //   <GestureHandlerRootView>
    //     <PanGestureHandler
    //       onHandlerStateChange={(event: any) =>
    //         updateTouchState(event.nativeEvent)
    //       }
    //       onGestureEvent={(event: any) =>
    //         movefast(event.nativeEvent.absoluteX)
    //       }>
    //       <Animated.View
    //         style={[styles.animationRow, moveitmoveit.getLayout()]}>
    //         <View style={styles.leftView}>
    //           <Icon
    //             name={'bars'}
    //             size={28}
    //             color={'#E6E6E6'}
    //             style={{position: 'absolute', top: 5, right: 10}}
    //             onPress={() => openMenu()}
    //           />
    //           <Icon
    //             name={'rocket'}
    //             size={28}
    //             color={'#E6E6E6'}
    //             style={{position: 'absolute', top: 55, right: 10}}
    //             onPress={() => closeMenu()}
    //           />
    //         </View>
    //         <View style={styles.rightView}>
    //           <View style={{backgroundColor: 'blue', flex: 1}}>
    //             <Text style={{color: '#F8F8F8'}}>Menu Item Here</Text>
    //             <Text style={{color: '#F8F8F8'}}>Menu Item Here</Text>
    //             <Text style={{color: '#F8F8F8'}}>Menu Item Here</Text>
    //           </View>
    //           <View style={{backgroundColor: 'red', flex: 1}}></View>
    //         </View>
    //       </Animated.View>
    //     </PanGestureHandler>
    //   </GestureHandlerRootView>
    // </View>
  );
};

const styles = StyleSheet.create({
  animationRow: {
    flexDirection: 'row',
  },
  bigWrap: {
    width: responsiveScreenWidth(50),
    height: responsiveHeight(30),
    backgroundColor: 'red',
  },
  smallWrap: {
    width: responsiveScreenWidth(50),
    height: responsiveHeight(30),
    backgroundColor: 'blue',
  },
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    flexDirection: 'row',
  },
  leftView: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1A1A1A',
    width: responsiveWidth(100),
    height: responsiveHeight(100),
  },
  rightView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    width: responsiveWidth(66),
    height: responsiveHeight(100),
  },
  button: {
    paddingTop: 24,
    paddingBottom: 24,
    width: 300,
    height: 300,
  },
  buttonText: {
    fontSize: 24,
    color: '#333',
  },
  box: {
    marginTop: 32,
    borderRadius: 4,
    backgroundColor: 'black',
  },
});

export default AnimationTest;
