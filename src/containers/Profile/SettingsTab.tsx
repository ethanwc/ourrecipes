import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ListItem} from 'react-native-elements';
import {useSelector} from 'react-redux';
import Auth from '@aws-amplify/auth';
import {RootState} from 'src/redux';
import {User} from 'src/redux/user/types';
import {Theme, Typography} from '../../assets/styles';

const SettingsTab = (props: any) => {
  const userSession: User = useSelector(
    (state: RootState) => state.UserReducer.session,
  );
  return (
    <View style={settingsTabStyle.container}>
      <View>
        <ListItem
          title={userSession.email}
          titleStyle={settingsTabStyle.email}
          containerStyle={settingsTabStyle.wrapper}
        />
        <ListItem
          title={'Bookmarks'}
          titleStyle={settingsTabStyle.title}
          leftIcon={{
            name: 'bookmark',
            type: 'feather',
            color: Theme.Light.headline,
          }}
          containerStyle={settingsTabStyle.wrapper}
          onPress={() =>
            props.navigation.navigate('Account', {
              screen: 'Bookmarks',
              params: {},
            })
          }
        />

        <ListItem
          title={'Shopping List'}
          titleStyle={settingsTabStyle.title}
          leftIcon={{
            name: 'shopping-bag',
            type: 'feather',
            color: Theme.Light.headline,
          }}
          containerStyle={settingsTabStyle.wrapper}
          onPress={() =>
            props.navigation.navigate('Account', {
              screen: 'Shopping List',
              params: {},
            })
          }
        />
      </View>
      <View>
        <ListItem
          title={'Settings'}
          titleStyle={settingsTabStyle.title}
          leftIcon={{
            name: 'settings',
            type: 'feather',
            color: Theme.Light.headline,
          }}
          containerStyle={settingsTabStyle.wrapper}
        />
        <ListItem
          title={'Privacy Policy'}
          titleStyle={settingsTabStyle.title}
          leftIcon={{
            name: 'info',
            type: 'feather',
            color: Theme.Light.headline,
          }}
          containerStyle={settingsTabStyle.wrapper}
        />
        <ListItem
          title={'Sign out'}
          titleStyle={settingsTabStyle.title}
          leftIcon={{
            name: 'log-out',
            type: 'feather',
            color: Theme.Light.headline,
          }}
          onPress={() => Auth.signOut()}
          containerStyle={settingsTabStyle.wrapper}
        />
      </View>
    </View>
  );
};

const settingsTabStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.Light.background,
    justifyContent: 'space-between',
  },
  wrapper: {
    backgroundColor: Theme.Light.background,
  },
  title: {
    ...Typography.Typography.subheader,
  },
  email: {
    ...Typography.Typography.body,
  },
});

export default SettingsTab;
