import React, {useState} from 'react';
import GroupCard from '../../Container/Group/GroupCard';
import GroupInviteCard from '../../Container/Group/GroupInviteCard';

import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import {Typography} from '../../styles/index';
import GroupBar from '../Utils/GroupBar';
import CreateGroup from './CreateGroup/CreateGroup';
import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

const GroupButton = (props: any) => {
  return (
    <View>
      <Icon
        name={'users'}
        onPress={() => console.log('pressed')}
        size={20}
        style={{paddingHorizontal: 5}}
      />
    </View>
  );
};

Navigation.registerComponent('GroupButton', () => GroupButton);

const testNavigate = () => {
  Navigation.push('GroupStack', {
    component: {
      name: 'Group',
      options: {
        topBar: {
          visible: false,
          title: {
            text: 'RielHouse',
          },
          rightButtons: [
            {
              id: 'asdf',
              icon: require('../../assets/icons/nav/users-solid.png'),
              component: {
                name: 'GroupButton',
              },
            },
          ],
        },
      },
    },
  });
};

const Groups = () => {
  const [showCreate, setShowCreate] = useState(false);

  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <ScrollView>
        <CreateGroup
          isVisible={showCreate}
          setVisible={() => setShowCreate(false)}
        />
        <GroupBar rightButtonOnPress={() => setShowCreate(!showCreate)} />

        <View style={{margin: 5}}>
          <Text style={Typography.lightThemeText.footnoteHeader}>
            Pending Invites
          </Text>
        </View>
        <GroupInviteCard />
        <GroupInviteCard />
        <View style={{margin: 5}}>
          <Text style={Typography.lightThemeText.footnoteHeader}>Groups</Text>
        </View>
        <TouchableHighlight onPress={() => testNavigate()}>
          <GroupCard />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => testNavigate()}>
          <GroupCard />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => testNavigate()}>
          <GroupCard />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => testNavigate()}>
          <GroupCard />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => testNavigate()}>
          <GroupCard />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => testNavigate()}>
          <GroupCard />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => testNavigate()}>
          <GroupCard />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => testNavigate()}>
          <GroupCard />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => testNavigate()}>
          <GroupCard />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => testNavigate()}>
          <GroupCard />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => testNavigate()}>
          <GroupCard />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => testNavigate()}>
          <GroupCard />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => testNavigate()}>
          <GroupCard />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => testNavigate()}>
          <GroupCard />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => testNavigate()}>
          <GroupCard />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => testNavigate()}>
          <GroupCard />
        </TouchableHighlight>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Groups;
