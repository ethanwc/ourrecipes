import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import { Theme, Typography } from '../../assets/styles';

const SettingsTab = (navigation: any) => {
  return (
    <View
      style={settingsTabStyle.container}>
      <View>
        <ListItem
          title={'steve@apple.com'}
          titleStyle={settingsTabStyle.title}
          containerStyle={settingsTabStyle.wrapper}
        />
        <ListItem
          title={'Bookmarks'}
          titleStyle={settingsTabStyle.title}
          leftIcon={{ name: 'bookmark', type: 'feather', color: Theme.Light.headline }}
          containerStyle={settingsTabStyle.wrapper}
        />
        <ListItem
          title={'Shopping List'}
          titleStyle={settingsTabStyle.title}
          leftIcon={{ name: 'shopping-bag', type: 'feather', color: Theme.Light.headline }}
          containerStyle={settingsTabStyle.wrapper}
        />
        <ListItem
          title={'Meal Planner'}
          titleStyle={settingsTabStyle.title}
          leftIcon={{ name: 'calendar', type: 'feather', color: Theme.Light.headline }}
          containerStyle={settingsTabStyle.wrapper}
        />
      </View>

      <View>
        <ListItem
          title={'Privacy Policy'}
          titleStyle={settingsTabStyle.title}
          leftIcon={{ name: 'info', type: 'feather', color: Theme.Light.headline }}
          containerStyle={settingsTabStyle.wrapper}
        />

        <ListItem
          title={'Settings'}
          titleStyle={settingsTabStyle.title}
          leftIcon={{ name: 'settings', type: 'feather', color: Theme.Light.headline }}
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
})

export default SettingsTab;
