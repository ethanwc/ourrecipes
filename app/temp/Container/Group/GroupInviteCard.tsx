import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Typography, Colors} from '../../styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export interface groupInviteCardProps {}

const GroupInviteCard = () => {
  return (
    <View style={groupInviteCard.container}>
      <View>
        <Text style={Typography.lightThemeText.mainHeader}>Riel House</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={Typography.lightThemeText.bodyImporantText}>
            3 Members
          </Text>
          <View style={groupInviteCard.dot} />
          <Text style={Typography.lightThemeText.bodyImporantText}>
            12 Recipes
          </Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Icon name="check" size={30} color={'green'} />
        <Icon
          name="times"
          size={30}
          color={'red'}
          style={{marginHorizontal: 10}}
        />
      </View>
    </View>
  );
};

const groupInviteCard = StyleSheet.create({
  container: {
    margin: 5,
    padding: 5,
    backgroundColor: Colors.lightTheme.backgroundPrimary,
    borderRadius: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dot: {
    backgroundColor: Colors.lightTheme.textPrimary,
    borderRadius: 4,
    width: 4,
    height: 4,
    marginHorizontal: 5,
  },
});
export default GroupInviteCard;
