import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from '../../view/profile/Profile';
import Calendar from '../../view/calendar/Calendar';
import ShoppingListView from '../../view/shoppinglist/ShoppingListView';
import BookmarkView from '../../view/Bookmark/BookmarkView';
import Followers from '../../components/Profile/Followers';

const exploreStack = createStackNavigator();

//Account Navigator
export function AccountNavigation() {
  return (
    <exploreStack.Navigator>
      <exploreStack.Screen
        name="AccountView"
        component={Profile}
        options={{headerShown: false}}
      />
      <exploreStack.Screen name="Bookmarks" component={BookmarkView} />
      <exploreStack.Screen name="Meal Planner" component={Calendar} />
      <exploreStack.Screen name="Shopping List" component={ShoppingListView} />
      <exploreStack.Screen name="Followers" component={Followers} />
    </exploreStack.Navigator>
  );
}
