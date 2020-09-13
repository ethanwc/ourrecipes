import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import FollowerCard from '../../containers/Profile/FollowerCard';

const Followers = () => {
  const DATA = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <SafeAreaView>
      {/* <FlatList
        data={DATA}
        renderItem={({item, index}) => <FollowerCard isFollowing={true} />}
        keyExtractor={(item) => '1'}
        decelerationRate={0.798}
        showsHorizontalScrollIndicator={false}
      /> */}
    </SafeAreaView>
  );
};

export default Followers;
