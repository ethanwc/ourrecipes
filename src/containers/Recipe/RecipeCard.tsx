import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableHighlight,
  Vibration,
} from 'react-native';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'src/redux';
import {addBookmarkAsync, removeBookmarkAsync} from '../../redux/user/actions';
import {User} from 'src/redux/user/types';
import {Typography, Theme} from '../../assets/styles';
import {Bookmark, Recipe} from '../../redux/recipe/types';

export interface recipeCardProps {
  isFirst: boolean;
  navigation: any;
  recipe: Recipe;
}

const RecipeCard = (props: recipeCardProps) => {
  const userState: User = useSelector(
    (state: RootState) => state.UserReducer.user,
  );

  const userSession: any = useSelector(
    (state: RootState) => state.UserReducer.session,
  );

  const dispatch = useDispatch();

  let bookmarkedRecipes: String[] = [];
  userState.bookmarks.forEach((bookmark: Bookmark) => {
    bookmarkedRecipes.push(bookmark.id);
  });
  const isBookmarked = bookmarkedRecipes.includes(props.recipe.id);

  const handleBookmark = () => {
    () => Vibration.vibrate(25);

    if (isBookmarked) {
      dispatch(removeBookmarkAsync(userSession.jwt, props.recipe.id));
    } else {
      dispatch(addBookmarkAsync(userSession.jwt, props.recipe.id));
    }
  };

  return (
    <TouchableHighlight
      onPress={() =>
        props.navigation.navigate('Recipes', {
          screen: 'Recipe',
          params: {
            id: props.recipe.id,
          },
        })
      }
      underlayColor={'transparent'}>
      <View
        style={
          props.isFirst
            ? {...recipeCardStyle.container, ...recipeCardStyle.containerFirst}
            : recipeCardStyle.container
        }>
        <Image
          style={recipeCardStyle.images}
          source={{uri: props.recipe.imageUrl}}
        />
        <Icon
          name="bookmark"
          onPress={() => handleBookmark()}
          color={isBookmarked ? Theme.Light.caption : Theme.Light.shadow}
          size={24}
          style={{position: 'absolute', right: 10, top: 10}}
        />
        <View style={recipeCardStyle.textContainer}>
          {/* Recipe Name */}
          <Text style={Typography.Typography.subheader}>
            {props.recipe.name}
          </Text>
          {/* Recipe cook time, category */}
          <View
            style={{
              ...recipeCardStyle.horizontalRow,
              justifyContent: 'space-between',
            }}>
            <View style={recipeCardStyle.horizontalRow}>
              <View style={recipeCardStyle.horizontalRow}>
                <Icon
                  name="clock-o"
                  size={20}
                  color={Theme.Light.headline}
                  style={{marginRight: 5}}
                />
                <Text
                  style={
                    Typography.Typography.body
                  }>{`${props.recipe.cookTime} min`}</Text>
              </View>

              {/* Dot inbetween categories */}
              <View style={recipeCardStyle.dot} />
              <Text style={Typography.Typography.body}>
                {props.recipe.category}
              </Text>
            </View>
            <View style={recipeCardStyle.horizontalRow}>
              <Icon
                name="star"
                style={{color: 'gold', marginRight: 5}}
                size={20}
              />
              <Text style={Typography.Typography.body}>
                {props.recipe.reviewRating}
              </Text>
            </View>
          </View>

          {/* Recipe Author, Reviews */}
          <View
            style={{
              ...recipeCardStyle.horizontalRow,
              justifyContent: 'space-between',
            }}>
            <Text style={Typography.Typography.subheadline}>
              {props.recipe.creator.name}
            </Text>

            <Text
              style={
                Typography.Typography.body
              }>{`${props.recipe.reviewCount} reviews`}</Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const recipeCardStyle = StyleSheet.create({
  containerFirst: {
    marginLeft: 10,
  },
  container: {
    width: responsiveWidth(75),
    marginRight: 10,
    backgroundColor: Theme.Light.shadow,
  },
  textContainer: {
    padding: 5,
  },
  horizontalRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  images: {
    width: responsiveWidth(75),
    height: responsiveWidth(45),
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  dot: {
    backgroundColor: Theme.Light.body,
    borderRadius: 4,
    width: 4,
    height: 4,
    marginHorizontal: 5,
  },
});

export default RecipeCard;
