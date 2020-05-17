import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import ExploreView from './view/explore/ExploreView';
import Groups from './view/groups/Groups';
import Create from './view/create/Create';
import Bookmarks from './view/bookmarks/Bookmarks';
import Profile from './view/profile/Profile';
import DetailedRecipe from './Container/Recipe/DetailedRecipe';
import {Theme} from './assets/styles';

//Explore Navigator
const exploreStack = createStackNavigator();

function Explore() {
  return (
    <exploreStack.Navigator>
      <exploreStack.Screen name="ExploreView" component={ExploreView} options={{headerShown: false}} />
      <exploreStack.Screen name="Recipe" component={DetailedRecipe} />
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
      <Tab.Navigator tabBarOptions={{activeTintColor: Theme.Light.caption}}>
        <Tab.Screen
          name="Recipes"
          component={Explore}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="search" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Groups"
          component={Groups}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="users" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Temp-Create"
          component={Create}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="plus" color={color} size={26} />
            ),
          }}
        />
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
          component={Profile}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="user" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
