import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { counter } from './redux/reducers/counter';
import { Counter } from './redux/types/counter';
import { ShoppingList } from './redux/shoppinglist/reducers';

const initialShoppingList: ShoppinglistState = {
  items: [{id: 'wtf', name: 'test1234', checked: false, creationDate: new Date() }]
}

const rootReducer = combineReducers({
  ShoppingList
});

// Root application state types
export interface RootState {
  ShoppingList: ShoppinglistState
}

const initialState: RootState = {
  ShoppingList: initialShoppingList
};

// Passing initial state here overrides state specified in component
const store = createStore(rootReducer, initialState);
// const store = createStore(rootReducer);


// export default function App() {
//   return (
//     <Provider store={store}>
//       <Card />
//     </Provider>
//   );
// }


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MenuProvider } from 'react-native-popup-menu';

import { Theme } from './assets/styles';
import Icon from 'react-native-vector-icons/Feather';
import ExploreView from './view/explore/ExploreView';
import GroupView from './view/groups/GroupView';
import Group from './components/Group/Group';
import Create from './view/create/Create';
import Profile from './view/profile/Profile';
import DetailedRecipe from './containers/Recipe/DetailedRecipe';
import Calendar from './view/calendar/Calendar';
import ShoppingListView from './view/shoppinglist/ShoppingListView';
import BookmarkView from './view/Bookmark/BookmarkView';
import Followers from './components/Profile/Followers';
import { ShoppinglistState } from './redux/shoppinglist/types';

const exploreStack = createStackNavigator();

console.disableYellowBox = true;

//Explore Navigator
function Explore() {
  return (
    <exploreStack.Navigator>
      <exploreStack.Screen
        name="ExploreView"
        component={ExploreView}
        options={{ headerShown: false }}
      />
      <exploreStack.Screen name="Recipe" component={DetailedRecipe} />
      <exploreStack.Screen name="CreateRecipe" component={Create} />
    </exploreStack.Navigator>
  );
}

//Groups Navigator
function Groups() {
  return (
    <exploreStack.Navigator>
      <exploreStack.Screen
        name="Groups"
        component={GroupView}
        options={{ headerShown: false }}
      />
      <exploreStack.Screen name="Group" component={Group} />
    </exploreStack.Navigator>
  );
}

//Account Navigator
function Account() {
  return (
    <exploreStack.Navigator>
      <exploreStack.Screen
        name="AccountView"
        component={Profile}
        options={{ headerShown: false }}
      />
      <exploreStack.Screen name="Bookmarks" component={BookmarkView} />
      <exploreStack.Screen name="Meal Planner" component={Calendar} />
      <exploreStack.Screen name="Shopping List" component={ShoppingListView} />
      <exploreStack.Screen name="Followers" component={Followers} />
    </exploreStack.Navigator>
  );
}

//app tab navigator
const Tab = createBottomTabNavigator();

/**
 * Container base navigation, app main
 */
export default function App() {
  return (
    <Provider store={store}>

      <MenuProvider>
        <NavigationContainer>
          <Tab.Navigator tabBarOptions={{ activeTintColor: Theme.Light.caption }}>
            <Tab.Screen
              name="Recipes"
              component={Explore}
              options={{
                tabBarIcon: ({ color }) => (
                  <Icon name="search" color={color} size={26} />
                ),
              }}
            />
            <Tab.Screen
              name="Groups"
              component={Groups}
              options={{
                tabBarIcon: ({ color }) => (
                  <Icon name="users" color={color} size={26} />
                ),
              }}
            />
            {/* <Tab.Screen
          name="Temp-Create"
          component={Create}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="plus" color={color} size={26} />
            ),
          }}
        /> */}
            {/* <Tab.Screen
          name="Bookmarks"
          component={Bookmarks}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="bookmark" color={color} size={26} />
            ),
          }}
        /> */}
            <Tab.Screen
              name="Account"
              component={Account}
              options={{
                tabBarIcon: ({ color }) => (
                  <Icon name="user" color={color} size={26} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </MenuProvider>
    </Provider>
  );
}
