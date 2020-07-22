import React from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Dimensions,
  Vibration,
} from 'react-native';
import {Image, ListItem, Button} from 'react-native-elements';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/Feather';
import {Theme, Typography} from '../../assets/styles';
import FollowCard from '../Profile/FollowerCard';
import IngredientCard from './IngredientCard';
import DirectionCard from './DirectionCard';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import NutritionCard from './NutritionCard';
import ReviewCard from './ReviewCard';
import RatingCard from './RatingCard';
import Share from 'react-native-share';
import CreateReview from '../../components/Review/CreateReview';

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

const Ingredients = () => {
  return (
    <View>
      <IngredientCard amount={1} ingredient={'flour'} unit={'cup'} />
      <IngredientCard amount={1} ingredient={'flour'} unit={'cup'} />
      <IngredientCard amount={1} ingredient={'flour'} unit={'cup'} />
    </View>
  );
};

const Directions = () => {
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

const shareSingleImage = async () => {
  const shareOptions = {
    title: 'Share file',
    url: 'google.com',
    failOnCancel: false,
  };

  try {
    const ShareResponse = await Share.open(shareOptions);
  } catch (error) {
    console.log('Error =>', error);
  }
};

const HeaderIcons = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 10,
      }}>
      <Icon
        name={'share'}
        size={30}
        color={Theme.Light.headline}
        onPress={() => shareSingleImage()}
      />
      <Icon
        name={'bookmark'}
        size={30}
        color={Theme.Light.headline}
        style={{paddingLeft: 15}}
        onPress={() => Vibration.vibrate(25)}
      />
    </View>
  );
};

const DetailedRecipe = ({navigation}: any) => {
  //Update nav title
  navigation.setOptions({
    headerShown: true,
    headerTitle: 'Chicken Pot Pie',
    headerRight: () => <HeaderIcons />,
  });
  //Handle state for tab view
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Ingredients'},
    {key: 'second', title: 'Directions'},
  ]);

  const renderScene = SceneMap({
    first: Ingredients,
    second: Directions,
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
              flexDirection: 'row',
              justifyContent: 'space-between',
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
            }}>
            <View
              style={{
                flex: 1,
                zIndex: 1,
                alignItems: 'center',
                opacity: .7,
                borderRightColor: Theme.Light.caption,
                borderRightWidth: 1,
              }}>
              <Icon name="clock" size={30} color={Theme.Light.caption}/>
              <Text
                style={{
                  ...Typography.Typography.body,
                  color: Theme.Light.caption,
                  marginTop: 5,
                }}>
                30 mins
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                zIndex: 1,
                alignItems: 'center',
                opacity: .7,
                borderRightColor: Theme.Light.caption,
                borderRightWidth: 1,
              }}>
              <Icon name="users" size={30} color={Theme.Light.caption} />
              <Text
                style={{
                  ...Typography.Typography.body,
                  color: Theme.Light.caption,
                  marginTop: 5,
                }}>
                Serves 4
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                opacity: .7,
                zIndex: 1,
              }}>
              <Icon name="info" size={30} color={Theme.Light.caption} />
              <Text
                style={{
                  ...Typography.Typography.body,
                  color: Theme.Light.caption,
                  marginTop: 5,
                  opacity: .7,
                }}>
                514 kcal
              </Text>
            </View>

            <View
              style={{
                zIndex: 0,
                backgroundColor: Theme.Light.shadow,
                opacity: 0.65,
                flex: 1,
                position: 'absolute',
                height: '100%',
                width: '100%',
              }}
            />
          </View>
        </View>
        {/* Everything else */}
        <View style={{flex: 1}}>
          {/* Follow user card */}
          <FollowCard isFollowing={true} key={0} />
          {/* Nutrition Card */}
          {/* <Text
            style={{
              ...Typography.Typography.header,
              paddingHorizontal: 15,
              marginTop: 15,
            }}>
            Nutrition
          </Text> */}
          {/* <NutritionCard fat={14} sugar={21} protein={45} /> */}

          {/* Tab view for ingredients and directions */}
          <TabView
            navigationState={{index, routes}}
            renderScene={renderScene}
            onIndexChange={setIndex}
            renderTabBar={renderTabBar}
            initialLayout={initialLayout}
          />
          {/* Review Card */}
          <Text
            style={{
              ...Typography.Typography.header,
              paddingHorizontal: 15,
              marginTop: 15,
              marginBottom: 15,
            }}>
            Reviews
          </Text>
          <RatingCard />
          <ReviewCard />
          {/* All Comments button */}
          <Button
            title="All Reviews"
            type="outline"
            onPress={() =>
              console.log('todo: nav to all comments / review page')
            }
            titleStyle={{color: Theme.Light.caption}}
            buttonStyle={{borderColor: Theme.Light.caption}}
            containerStyle={{
              margin: 15,
              borderWidth: 1,
              borderColor: Theme.Light.caption,
            }}
          />
          <CreateReview />
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
