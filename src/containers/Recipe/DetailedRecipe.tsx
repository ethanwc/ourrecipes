import React, {useEffect} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Dimensions,
  Vibration,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {Image, Button} from 'react-native-elements';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/Feather';
import {Theme, Typography} from '../../assets/styles';
import FollowerCard, {RecipeAuthor} from '../Profile/FollowerCard';
import IngredientCard from './IngredientCard';
import DirectionCard from './DirectionCard';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import NutritionCard from './NutritionCard';
import ReviewCard from './ReviewCard';
import RatingCard from './RatingCard';
import Share from 'react-native-share';
import CreateReview from '../../components/Review/CreateReview';
import {
  Recipe,
  Ingredient,
  Direction,
  Bookmark,
} from '../../redux/recipe/types';
import {User} from 'src/redux/user/types';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'src/redux';
import {getRecipeInfo} from '../../redux/recipe/actions';
import {addBookmarkAsync, removeBookmarkAsync} from '../../redux/user/actions';

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

//todo: remove this badness :(@()#())
console.warn = () => {};

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

const DetailedRecipe = ({navigation, route}: any) => {
  const RECIPEID = route.params.id;

  const recipeState: Recipe = useSelector(
    (state: RootState) => state.RecipeReducer.recipe,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipeInfo(RECIPEID));
  }, []);

  console.log(recipeState.id, RECIPEID);

  const userSession: any = useSelector(
    (state: RootState) => state.UserReducer.session,
  );

  const userState: User = useSelector(
    (state: RootState) => state.UserReducer.user,
  );
  let bookmarkedRecipes: String[] = [];

  userState.bookmarks.forEach((bookmark: Bookmark) => {
    bookmarkedRecipes.push(bookmark.id);
  });

  const isBookmarked = bookmarkedRecipes.includes(recipeState.id);

  let followingUsers: String[] = [];

  console.log("ui rerendering")
  userState.following.forEach((user: User) => {
    followingUsers.push(user.id);
  });

  const isFollowing = followingUsers.includes(recipeState.creator.id);

  const handleBookmark = () => {
    () => Vibration.vibrate(25);

    if (isBookmarked) {
      dispatch(removeBookmarkAsync(userSession.jwt, recipeState.id));
    } else {
      dispatch(addBookmarkAsync(userSession.jwt, recipeState.id));
    }
  };

  const HeaderIcons = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
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
          color={isBookmarked ? Theme.Light.caption : Theme.Light.headline}
          style={{marginHorizontal: 5}}
          onPress={() => handleBookmark()}
        />
      </View>
    );
  };

  // Update nav title
  navigation.setOptions({
    headerShown: true,
    headerTitle: recipeState.name,
    headerRight: () => <HeaderIcons />,
  });

  const Ingredients = () => {
    return (
      <View>
        <FlatList
          data={recipeState.ingredients}
          renderItem={({item}: {item: Ingredient}) => (
            <IngredientCard ingredient={item} />
          )}
          keyExtractor={(item: Ingredient) => item.id}
          decelerationRate={0.798}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  };

  const Directions = () => {
    return (
      <View>
        <FlatList
          data={recipeState.directions}
          renderItem={({item}: {item: Direction}) => (
            <DirectionCard direction={item} />
          )}
          keyExtractor={(item: Direction) => item.id}
          decelerationRate={0.798}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  };

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

  const author: RecipeAuthor = {
    ...recipeState.creator,
    recipeCount: recipeState.creator.recipes.length,
  };

  if (recipeState.id !== RECIPEID)
    return <ActivityIndicator size="large" color={Theme.Light.caption} />;

  return (
    <SafeAreaView>
      <ScrollView>
        {/* Recipe Image */}
        <View style={{flex: 1}}>
          <Image
            source={{uri: recipeState.imageUrl}}
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
                opacity: 0.7,
                borderRightColor: Theme.Light.caption,
                borderRightWidth: 1,
              }}>
              <Icon name="clock" size={30} color={Theme.Light.caption} />
              <Text
                style={{
                  ...Typography.Typography.body,
                  color: Theme.Light.caption,
                  marginTop: 5,
                }}>
                {recipeState.cookTime} mins
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                zIndex: 1,
                alignItems: 'center',
                opacity: 0.7,
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
                {`Serves ${recipeState.servingSize}`}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                opacity: 0.7,
                zIndex: 1,
              }}>
              <Icon name="info" size={30} color={Theme.Light.caption} />
              <Text
                style={{
                  ...Typography.Typography.body,
                  color: Theme.Light.caption,
                  marginTop: 5,
                  opacity: 0.7,
                }}>
                514 kcal
              </Text>
            </View>

            <View
              style={{
                zIndex: 0,
                backgroundColor: Theme.Light.shadow,
                opacity: 0.35,
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
          <FollowerCard isFollowing={isFollowing} author={author} />
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
          <RatingCard
            reviewRating={recipeState.reviewRating}
            reviewCount={recipeState.reviewCount}
            reviewDistribution={recipeState.reviewDistribution}
          />
          {/* All Comments button */}
          <Button
            title="See Reviews"
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

export default DetailedRecipe;
