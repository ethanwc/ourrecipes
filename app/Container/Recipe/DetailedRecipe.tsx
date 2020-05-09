import React from 'react';
import {View, SafeAreaView, ScrollView, StyleSheet, Text} from 'react-native';
import {Image, ListItem} from 'react-native-elements';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/Feather';
import {Theme, Typography} from '../../assets/styles';
import FollowCard from './FollowCard';

const DetailedRecipe = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* Recipe Image */}
        <View style={{flex: 1}}>
          <Image
            source={require('../../assets/images/food.jpg')}
            style={{width: responsiveWidth(100), height: responsiveWidth(100)}}
          />

          <View
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              justifyContent: 'center',
              padding: 15,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Icon
                name={'arrow-left'}
                size={30}
                color={Theme.Light.headline}
              />
              <View style={{flexDirection: 'row'}}>
                <Icon name={'share'} size={30} color={Theme.Light.headline} />
                <Icon
                  name={'bookmark'}
                  size={30}
                  color={Theme.Light.headline}
                  style={{paddingLeft: 15}}
                />
              </View>
            </View>
          </View>
        </View>
        {/* Everything else */}
        <View style={{flex: 1}}>
          {/* Follow user card */}
          <FollowCard />
          {/* Ingredients tab */}
          <View style={detailedRecipeStyle.header}>
            <Text style={Typography.Typography.header}>Categories</Text>
          </View>
          {/* todo: use tab list here... */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const detailedRecipeStyle = StyleSheet.create({
  header: {
    margin: 10,
  },
});

export default DetailedRecipe;
