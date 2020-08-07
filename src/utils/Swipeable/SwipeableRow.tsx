import React, {useRef} from 'react';
import {Animated, StyleSheet, I18nManager} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

export interface SwipeableRowProps {}

export const SwipeableRow = (props: any) => {
  const swipeableRef = useRef<Swipeable>(null);

  const renderLeftActions = (progress: any, dragX: any) => {
    const scale = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    });
    return (
      <RectButton style={styles.leftAction} onPress={() => close()}>
        <AnimatedIcon
          name="archive"
          size={30}
          color="#fff"
          onPress={() => console.log('archive pressed')}
          style={[styles.actionIcon, {transform: [{scale}]}]}
        />
      </RectButton>
    );
  };
  const renderRightActions = (progress: any, dragX: any) => {
    const scale = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });
    return (
      <RectButton style={styles.rightAction} onPress={() => close()}>
        <AnimatedIcon
          name="delete-forever"
          size={30}
          color="#fff"
          onPress={() => console.log('delete pressed')}
          style={[styles.actionIcon, {transform: [{scale}]}]}
        />
      </RectButton>
    );
  };
  const close = () => {
    swipeableRef.current?.close();
  };

  return (
    <Swipeable
      ref={swipeableRef}
      friction={2}
      leftThreshold={60}
      rightThreshold={80}
      renderLeftActions={(progress: any, dragX: any) =>
        renderLeftActions(progress, dragX)
      }
      renderRightActions={(progress: any, dragX: any) =>
        renderRightActions(progress, dragX)
      }>
      {props.child}
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  leftAction: {
    flex: 1,
    backgroundColor: 'orange',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: I18nManager.isRTL ? 'row' : 'row-reverse',
    margin: 0,
  },
  actionIcon: {
    width: 30,
    marginHorizontal: 10,
  },
  rightAction: {
    alignItems: 'center',
    flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
    backgroundColor: 'red',
    flex: 1,
    justifyContent: 'flex-end',
    margin: 0,
  },
});
