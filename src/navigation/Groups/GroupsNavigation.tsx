import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import GroupView from '../../view/groups/GroupView';
import Group from '../../components/Group/Group';

const exploreStack = createStackNavigator();

//Groups Navigator
export function GroupsNavigation() {
  return (
    <exploreStack.Navigator>
      <exploreStack.Screen
        name="Groups"
        component={GroupView}
        options={{headerShown: false}}
      />
      <exploreStack.Screen name="Group" component={Group} />
    </exploreStack.Navigator>
  );
}
