import React, {useState} from 'react';
import {View, StyleSheet, Text, SafeAreaView, ScrollView} from 'react-native';
import {Colors, Typography} from '../../../styles';
import RecipeCardLarge from '../../../Container/Recipe/RecipeCardLarge';
import BackBar from '../../Utils/BackBar';
import GroupMembers from '../GroupMembers/GroupMembers';
export interface groupProps {}

const Group = () => {
  const [showMembers, setShowMembers] = useState(false);
  return (
    <SafeAreaView style={groupStyle.container}>
      <BackBar
        leftIconName={'arrow-left'}
        leftIconOnPress={() => console.log('back press')}
        rightIconName={'users'}
        rightIconOnPress={() => setShowMembers(true)}
        barTitle={'RielHouse'}
      />
      <GroupMembers
        isVisible={showMembers}
        setVisible={() => setShowMembers(false)}
      />
      <ScrollView>
        <RecipeCardLarge renderAuthor={true} isFirst={false} />
        <RecipeCardLarge renderAuthor={true} isFirst={false} />
        <RecipeCardLarge renderAuthor={true} isFirst={false} />
        <RecipeCardLarge renderAuthor={true} isFirst={false} />
        <RecipeCardLarge renderAuthor={true} isFirst={false} />
      </ScrollView>
    </SafeAreaView>
  );
};

const groupStyle = StyleSheet.create({
  container: {
    padding: 0,
  },
});

export default Group;
