import React from 'react';
import {
  Text,
  View,
  Dimensions,
  ScrollView,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {Theme, Typography} from '../../assets/styles';
import MiniRecipeCard from '../../Container/Recipe/MiniRecipeCard';
import { responsiveWidth } from 'react-native-responsive-dimensions';

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

  const SecondRoute = () => {
    return (
      <View>
        <Text>asdf</Text>
      </View>
    );
  };

  const ThirdRoute = () => {
    return (
      <View>
        <Text>asdf</Text>
      </View>
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
    second: SecondRoute,
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
