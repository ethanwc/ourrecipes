import React from 'react';
import { SafeAreaView, ScrollView, Text, StyleSheet, View, FlatList } from 'react-native';
import { Typography, Theme } from '../../assets/styles';
import Icon from 'react-native-vector-icons/Feather';
import { ListItem } from 'react-native-elements';
import RecipeCard from '../../Container/Recipe/RecipeCard';

/**
 * Groups page of app
 */
const Groups = ( navigation : any) => {

  const DATA = [
    {title: 'steve'},
    {title: 'jobs'},
    {title: 'is'},
    {title: 'dead'},
  ];
    
  return (
    <SafeAreaView>
      <ScrollView>
        {/* Call react naitve popup menu */}
        {/* <ListItem
          title={'RielHouse'}
          titleStyle={Typography.Typography.header}
          subtitle={'10 members'}
          subtitleStyle={Typography.Typography.bodyflat}
          bottomDivider
          rightIcon={{
            name: 'more-vertical',
            type: 'feather',
            color: Theme.Light.caption,
          }}
        /> */}

        {/* Navbar with back button, group name, members button, options button  */}

        <View style={groupStyle.container}>
        <FlatList
        data={DATA}
        renderItem={({item, index}) => (
          <RecipeCard isFirst={index === 0} renderAuthor={true} navigation={navigation} size={'large'} />
        )}
        keyExtractor={(item) => item.title}
        decelerationRate={0.798}
        showsHorizontalScrollIndicator={false}
      />

        </View>


      </ScrollView>
    </SafeAreaView>
  );
};

const groupStyle = StyleSheet.create({
  container: {

  }
})


const groupsStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Theme.Light.shadow,
    borderBottomWidth: .5,
    borderBottomColor: Theme.Light.body,
    padding: 10,
  },
});

export default Groups;
