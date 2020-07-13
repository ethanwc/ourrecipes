import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MenuProvider} from 'react-native-popup-menu';
import Icon from 'react-native-vector-icons/Feather';
import {Theme} from '../assets/styles';
import {ExploreNavigation} from './Explore/ExploreNavigation';
import {GroupsNavigation} from './Groups/GroupsNavigation';
import {AccountNavigation} from './Account/AccountNavigation';

//Tab navigator
const Tab = createBottomTabNavigator();

//Account Navigator
export function Navigator() {
  return (
    <MenuProvider>
      <NavigationContainer>
        <Tab.Navigator tabBarOptions={{activeTintColor: Theme.Light.caption}}>
          <Tab.Screen
            name="Recipes"
            component={ExploreNavigation}
            options={{
              tabBarIcon: ({color}) => (
                <Icon name="search" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Groups"
            component={GroupsNavigation}
            options={{
              tabBarIcon: ({color}) => (
                <Icon name="users" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Account"
            component={AccountNavigation}
            options={{
              tabBarIcon: ({color}) => (
                <Icon name="user" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </MenuProvider>
  );
}
