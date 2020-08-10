import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import BarRecipeCard from '../../containers/Recipe/BarRecipeCard';
import {User} from 'src/redux/user/types';
import {useSelector} from 'react-redux';
import {RootState} from 'src/redux';
import {FlatList} from 'react-native-gesture-handler';
import {Recipe} from 'src/redux/recipe/types';
import {Theme} from '../../assets/styles';

/**
 * Bookmarks page of app
 */
const BookmarkView = ({navigation}: any) => {
  const userState: User = useSelector(
    (state: RootState) => state.UserReducer.user,
  );

  const [bookmarks, setBookmarks] = useState<Recipe>();

  useEffect(() => {
    //TODO: useEffect to fetch bookmarked recipes given userid
  }, []);

  const loadingAnimation = (
    <ActivityIndicator size="large" color={Theme.Light.caption} />
  );

  return (
    <SafeAreaView>
      <FlatList
        data={bookmarks}
        renderItem={({item}: {item: Recipe}) => (
          <BarRecipeCard
            isBookmarked={userState.bookmarks.includes(item.id)}
            recipe={item}
          />
        )}
        keyExtractor={(item) => item.id}
        decelerationRate={0.798}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const bookmarksStyle = StyleSheet.create({
  header: {
    margin: 10,
  },
});

export default BookmarkView;
