import React from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Dimensions,
} from 'react-native';
import {Image, ListItem} from 'react-native-elements';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/Feather';
import {Theme, Typography} from '../../assets/styles';
import FollowCard from './FollowCard';
import IngredientCard from './IngredientCard';
import DirectionCard from './DirectionCard';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

const FirstRoute = () => {
  return (
    <View>
      <IngredientCard amount={1} ingredient={'flour'} unit={'cup'} />
      <IngredientCard amount={1} ingredient={'flour'} unit={'cup'} />
      <IngredientCard amount={1} ingredient={'flour'} unit={'cup'} />
    </View>
  );
};

//custom tab bar
const renderTabBar = (props: any) => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: Theme.Light.caption}}
    style={{backgroundColor: Theme.Light.shadow}}
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

const SecondRoute = () => {
  return (
    <View>
      <DirectionCard order={1} direction={'Preheat oven to 350F'} />
      <DirectionCard
        order={1}
        direction={
          'In a large bowl combine flour, flour, flour and water and form a pasty mixture then roll into a ball, light on fire and throw out the window.'
        }
      />
    </View>
  );
};

const DetailedRecipe = () => {
  //Handle state for tab view
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Ingredients'},
    {key: 'second', title: 'Directions'},
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const initialLayout = {width: Dimensions.get('window').width};

  return (
    <SafeAreaView>
      <ScrollView>
        {/* Recipe Image */}
        <View style={{flex: 1}}>
          <Image
            source={require('../../assets/images/food.jpg')}
            style={{width: responsiveWidth(100), height: responsiveWidth(100)}}
          />

          <View
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              justifyContent: 'center',
              padding: 15,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Icon
                name={'arrow-left'}
                size={30}
                color={Theme.Light.headline}
              />
              <View style={{flexDirection: 'row'}}>
                <Icon name={'share'} size={30} color={Theme.Light.headline} />
                <Icon
                  name={'bookmark'}
                  size={30}
                  color={Theme.Light.headline}
                  style={{paddingLeft: 15}}
                />
              </View>
            </View>
          </View>
        </View>
        {/* Everything else */}
        <View style={{flex: 1}}>
          {/* Follow user card */}
          <FollowCard />

          {/* Tab view for ingredients and directions */}
          <TabView
            navigationState={{index, routes}}
            renderScene={renderScene}
            onIndexChange={setIndex}
            renderTabBar={renderTabBar}
            initialLayout={initialLayout}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const detailedRecipeStyle = StyleSheet.create({
  header: {
    margin: 10,
  },
});

export default DetailedRecipe;
