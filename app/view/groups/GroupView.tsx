import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, TouchableOpacity } from 'react-native';
import GroupCards from '../../Component/Group/GroupCards';
import Icon from 'react-native-vector-icons/Feather';
import { Theme } from '../../assets/styles';


/**
 * Groups page of app
 */
const Groups = ({ navigation }: any) => {

  const DATA = [
    { title: 'steve' },
    { title: 'jobs' },
    { title: 'is' },
    { title: 'dead' },
  ];

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        {/* Call react naitve popup menu */}
        {/* Navbar with back button, group name, members button, options button  */}
        <View style={groupsStyle.container}>
          <GroupCards navigation={navigation} />
        </View>
      </ScrollView>
      <TouchableOpacity
        style={groupsStyle.createButton}
        // onPress={() =>
          // navigation.navigate('Recipes', { screen: 'CreateRecipe', params: {} })
        // }
        >
        <Icon name={'plus'} size={40} color={Theme.Light.caption} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const groupsStyle = StyleSheet.create({
  container: {

  },
  createButton: {
    borderRadius: 100,
    backgroundColor: Theme.Light.background,
    position: 'absolute',
    bottom: 15,
    right: 15,
    padding: 10,
  }
})

export default Groups;
