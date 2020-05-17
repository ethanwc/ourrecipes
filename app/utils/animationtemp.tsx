  //   let opacity = new Animated.Value(0);

  //   const aniamte = () => {
  //     opacity.setValue(0);
  //     Animated.timing(opacity, {
  //       toValue: 1,
  //       duration: 700,
  //       easing: Easing.elastic(2),
  //       useNativeDriver: false,
  //     }).start();
  //   };

  //   const size = opacity.interpolate({
  //     inputRange: [0, 1],
  //     outputRange: [0, 80],
  //   });

  //   const box = {
  //     marginTop: 32,
  //     borderRadius: 4,
  //     backgroundColor: '#61dafb',
  //   };

  //   const animatedStyles = [
  //     {
  //       ...box,
  //       opacity,
  //       width: size,
  //       height: size,
  //     },
  //   ];


  //   <TouchableWithoutFeedback onPress={() => aniamte()} style={{ flex: 1 }}>
  //   <View>
  //     <Animated.View style={animatedStyles} />
  //     <View style={{ width: 100, height: 100, backgroundColor: 'red' }} />
  //   </View>
  // </TouchableWithoutFeedback>

  // <View style={{ flex: 1 }}>
  //   <Animated.View style={animatedStyles} />
  // </View>