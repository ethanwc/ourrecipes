import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Overlay} from 'react-native-elements';
import {
  responsiveWidth,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import FollowerCard from '../Profile/FollowerCard';

export interface groupMembersProps {
  toggleOverlay: Function;
  isDisplayed: boolean;
}

const GroupMembers = (props: groupMembersProps) => {
  const DATA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  return (
    <SafeAreaView>
      <Overlay
        isVisible={props.isDisplayed}
        onBackdropPress={() => props.toggleOverlay()}
        backdropStyle={{margin: 0, padding: 0}}
        overlayStyle={{
          margin: 0,
          padding: 0,
          width: responsiveWidth(90),
          height: responsiveHeight(90),
        }}>
        <FlatList
          data={DATA}
          renderItem={({item, index}) => <FollowerCard isFollowing={true} />}
          decelerationRate={0.798}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
        />
      </Overlay>
    </SafeAreaView>
  );
};

export default GroupMembers;
