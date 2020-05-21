import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import GroupCards from '../../Component/Group/GroupCards';


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
    <SafeAreaView>
      <ScrollView>
        {/* Call react naitve popup menu */}

        {/* Navbar with back button, group name, members button, options button  */}
        <View style={groupsStyle.container}>
          <GroupCards navigation={navigation} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const groupsStyle = StyleSheet.create({
  container: {

  }
})

export default Groups;
