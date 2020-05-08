import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Profile from './view/profile/Profile';
import TabNav from './TabNav';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//app tab navigator
const Tab = createBottomTabNavigator();

/**
 * Container base navigation, app main
 */
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={TabNav} />
        <Tab.Screen name="Settings" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
