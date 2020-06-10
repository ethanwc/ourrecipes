import React from 'react';
import {
  Text,
  View,
  Dimensions,
  ScrollView,
  SafeAreaView,
  FlatList,
  Image,
} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {Theme, Typography} from '../../assets/styles';
import MiniRecipeCard from '../../Container/Recipe/MiniRecipeCard';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import ReviewCard from '../../Container/Review/ReviewCard';

const ProfileBrowser = () => {
  const RecipeBrowser = () => {
    return (
      <SafeAreaView style={{padding: responsiveWidth(1)}}>
        <ScrollView>
          <FlatList
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            renderItem={MiniRecipeCard}
            numColumns={2}
          />
        </ScrollView>
      </SafeAreaView>
    );
  };

  const PhotoBrowser = () => {
    return (
      <SafeAreaView>
        <ScrollView>
          <Image
            style={{
              width: responsiveWidth(95),
              margin: responsiveWidth(2.5),
              marginTop: responsiveWidth(2.5),
              height: responsiveWidth(95),
            }}
            source={require('../../assets/images/food.jpg')}
          />
          <Image
            style={{
              width: responsiveWidth(95),
              margin: responsiveWidth(2.5),
              marginTop: 0,
              height: responsiveWidth(95),
            }}
            source={require('../../assets/images/food.jpg')}
          />
          <Image
            style={{
              width: responsiveWidth(95),
              margin: responsiveWidth(2.5),
              marginTop: 0,
              height: responsiveWidth(95),
            }}
            source={require('../../assets/images/food.jpg')}
          />
          <Image
            style={{
              width: responsiveWidth(95),
              margin: responsiveWidth(2.5),
              marginTop: 0,
              height: responsiveWidth(95),
            }}
            source={require('../../assets/images/food.jpg')}
          />
          <Image
            style={{
              width: responsiveWidth(95),
              margin: responsiveWidth(2.5),
              marginTop: 0,
              height: responsiveWidth(95),
            }}
            source={require('../../assets/images/food.jpg')}
          />
          <Image
            style={{
              width: responsiveWidth(95),
              margin: responsiveWidth(2.5),
              marginTop: 0,
              height: responsiveWidth(95),
            }}
            source={require('../../assets/images/food.jpg')}
          />
          <Image
            style={{
              width: responsiveWidth(95),
              margin: responsiveWidth(2.5),
              marginTop: 0,
              height: responsiveWidth(95),
            }}
            source={require('../../assets/images/food.jpg')}
          />
        </ScrollView>
      </SafeAreaView>
    );
  };

  const ThirdRoute = () => {
    return (
      <SafeAreaView>
        <ScrollView>
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </ScrollView>
      </SafeAreaView>
    );
  };

  //Handle state for tab view
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Recipes'},
    {key: 'second', title: 'Photos'},
    {key: 'third', title: 'Reviews'},
  ]);

  const renderScene = SceneMap({
    first: RecipeBrowser,
    second: PhotoBrowser,
    third: ThirdRoute,
  });

  const initialLayout = {width: Dimensions.get('window').width};

  //custom tab bar
  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: Theme.Light.caption}}
      style={{backgroundColor: Theme.Light.background}}
      renderLabel={({route, focused, color}) => (
        <Text
          style={{
            ...Typography.Typography.subheader,
            color: Theme.Light.caption,
            margin: 8,
          }}>
          {route.title}
        </Text>
      )}
    />
  );
  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={renderTabBar}
      initialLayout={initialLayout}
    />
  );
};

export default ProfileBrowser;
