import React, {useEffect} from 'react';
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
import MiniRecipeCard, {
  MiniRecipeCardProps,
  MiniRecipe,
} from '../../containers/Recipe/MiniRecipeCard';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import ReviewCard from '../../containers/Review/ReviewCard';
import {Recipe} from 'src/redux/recipe/types';
import {getUserInfo} from '../../redux/user/actions';
import {useDispatch, useSelector} from 'react-redux';
import {User} from 'src/redux/user/types';
import {RootState} from 'src/redux';

export interface ProfileBrowserProps {
  navigation: any;
}

// same useEffect approach as reviews here

const ProfileBrowser = (props: ProfileBrowserProps) => {
  const dispatch = useDispatch();

  const userSession: any = useSelector(
    (state: RootState) => state.UserReducer.session,
  );

  useEffect(() => {
    dispatch(getUserInfo(userSession.username));
  }, []);

  const userInfo: User = useSelector(
    (state: RootState) => state.UserReducer.user,
  );

  const RecipeBrowser = () => {
    return (
      <FlatList
        data={userInfo.recipes}
        renderItem={({item}: {item: MiniRecipe}) => (
          <MiniRecipeCard miniRecipe={item} navigation={props.navigation} />
        )}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
      />
    );
  };
  const PhotoBrowser = () => {
    return (
      <SafeAreaView>
        <FlatList
          data={[1, 2, 3, 4, 5]}
          renderItem={({item}: {item: any}) => (
            <Image
              style={{
                width: responsiveWidth(95),
                margin: responsiveWidth(2.5),
                marginTop: responsiveWidth(2.5),
                height: responsiveWidth(95),
              }}
              source={{
                uri:
                  'https://res.cloudinary.com/dk4gnl6ww/image/upload/v1597131689/js8wcvmo3bsktrfwvkkh.jpg',
              }}
            />
          )}
          keyExtractor={(group: any) => 'asdf'}
          decelerationRate={0.798}
          showsHorizontalScrollIndicator={false}
        />
      </SafeAreaView>
    );
  };

  const Reviews = () => {
    return (
      <SafeAreaView>
        <ScrollView>
          <ReviewCard
            id={'asdf'}
            creatorid={'sadf'}
            review={'Wow this tastes garbo'}
            rating={2}
          />
          <ReviewCard
            id={'asdf'}
            creatorid={'sadf'}
            review={'Wow this tastes garbo'}
            rating={2}
          />
          <ReviewCard
            id={'asdf'}
            creatorid={'sadf'}
            review={'Wow this tastes garbo'}
            rating={2}
          />
          <ReviewCard
            id={'asdf'}
            creatorid={'sadf'}
            review={'Wow this tastes garbo'}
            rating={2}
          />
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
    third: Reviews,
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
