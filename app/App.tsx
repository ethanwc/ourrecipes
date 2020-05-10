import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import Profile from './view/profile/Profile';
import Explore from './view/explore/Explore';
import DetailedRecipe from './Container/Recipe/DetailedRecipe';

//Explore Navigator
const exploreStack = createStackNavigator();

function ExploreView() {
  return (
    <exploreStack.Navigator>
      <exploreStack.Screen name="Explore" component={Explore} />
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
      <Tab.Navigator>
        <Tab.Screen
          name="ExploreView"
          component={ExploreView}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="search" color={color} size={26} />
            ),
          }}
        />
        {/* <Tab.Screen
          name="DetailedRecipe"
          component={DetailedRecipe}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="users" color={color} size={26} />
            ),
          }}
        /> */}
        <Tab.Screen
          name="Groups"
          component={Profile}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="users" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Create"
          component={Profile}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="plus" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={Profile}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="heart" color={color} size={26} />
            ),
          }}
        />
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
