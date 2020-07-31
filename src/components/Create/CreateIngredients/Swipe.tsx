import React, {Component} from 'react';
import {StyleSheet, Text, View, I18nManager, Alert} from 'react-native';
import {FlatList, RectButton} from 'react-native-gesture-handler';

import GmailStyleSwipeableRow from './GmailRow';
import CreateIngredientCard from '../../../containers/Create/CreateIngredientCard';

const SwipeableRow = (item: any, index: any) => {
  return (
    <GmailStyleSwipeableRow>
      <CreateIngredientCard />
    </GmailStyleSwipeableRow>
  );
};

export default class Swipe extends Component {
  render() {
    return (
      <FlatList
        data={DATA}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({item, index}) => (
          <SwipeableRow item={item} index={index} />
        )}
        keyExtractor={(item, index) => `message ${index}`}
      />
    );
  }
}

const styles = StyleSheet.create({
  separator: {
    backgroundColor: 'rgb(200, 199, 204)',
    height: StyleSheet.hairlineWidth,
  },
  fromText: {
    fontWeight: 'bold',
    backgroundColor: 'transparent',
  },
});

const DATA = [
  {
    from: "D'Artagnan",
    when: '3:11 PM',
    message:
      'Unus pro omnibus, omnes pro uno. Nunc scelerisque, massa non lacinia porta, quam odio dapibus enim, nec tincidunt dolor leo non neque',
  },
  {
    from: 'Aramis',
    when: '11:46 AM',
    message:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus hendrerit ligula dignissim maximus aliquet. Integer tincidunt, tortor at finibus molestie, ex tellus laoreet libero, lobortis consectetur nisl diam viverra justo.',
  },
];
