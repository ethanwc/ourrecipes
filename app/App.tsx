import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Theme } from './assets/styles';
import Icon from 'react-native-vector-icons/Feather';
import ExploreView from './view/explore/ExploreView';
import GroupView from './view/groups/GroupView';
import Group from './Component/Group/Group';
import Create from './view/create/Create';
import Profile from './view/profile/Profile';
import DetailedRecipe from './Container/Recipe/DetailedRecipe';
import Calendar from './view/calendar/Calendar';
import ShoppingList from './view/shoppinglist/ShoppingList';
import Bookmarks from './view/bookmarks/Bookmarks';

const exploreStack = createStackNavigator();

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
      <exploreStack.Screen name="Bookmarks" component={Bookmarks} />
      <exploreStack.Screen name="Meal Planner" component={Calendar} />
      <exploreStack.Screen name="Shopping List" component={ShoppingList} />
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
  );
}
