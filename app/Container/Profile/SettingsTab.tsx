import React from 'react';
import {View} from 'react-native';
import {ListItem} from 'react-native-elements';

const SettingsTab = (navigation: any) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'space-between',
      }}>
      <View>
        <ListItem
          title={'Steve Jobs'}
          titleStyle={{color: '#F8F8F8', fontFamily: 'Lato-Regular'}}
          containerStyle={{
            backgroundColor: 'black',
          }}
          bottomDivider
        />
        <ListItem
          title={'Saved Recipes'}
          titleStyle={{color: '#F8F8F8', fontFamily: 'Lato-Regular'}}
          leftIcon={{name: 'bookmark', type: 'feather', color: 'white'}}
          containerStyle={{
            backgroundColor: 'black',
          }}
        />
        <ListItem
          title={'Shopping List'}
          titleStyle={{color: '#F8F8F8', fontFamily: 'Lato-Regular'}}
          leftIcon={{name: 'shopping-bag', type: 'feather', color: 'white'}}
          containerStyle={{
            backgroundColor: 'black',
          }}
        />
        <ListItem
          title={'Meal Planner'}
          titleStyle={{color: '#F8F8F8', fontFamily: 'Lato-Regular'}}
          leftIcon={{name: 'calendar', type: 'feather', color: 'white'}}
          containerStyle={{
            backgroundColor: 'black',
          }}
        />
      </View>

      <View>
        <ListItem
          title={'Privacy Policy'}
          titleStyle={{color: '#F8F8F8', fontFamily: 'Lato-Regular'}}
          leftIcon={{name: 'info', type: 'feather', color: 'white'}}
          containerStyle={{
            backgroundColor: 'black',
          }}
        />

        <ListItem
          title={'Settings'}
          titleStyle={{color: '#F8F8F8', fontFamily: 'Lato-Regular'}}
          leftIcon={{name: 'settings', type: 'feather', color: 'white'}}
          containerStyle={{
            backgroundColor: 'black',
          }}
        />
      </View>
    </View>
  );
};

export default SettingsTab;
