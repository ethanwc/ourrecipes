import React from 'react';
import {useSelector} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';
import GroupCard from '../../containers/Group/GroupCard';
import {Group} from '../../redux/group/types';
import {RootState} from '../../redux';

export interface groupCardsProps {
  navigation: any;
}

const GroupCards = (props: groupCardsProps) => {
  const groups: Group[] = useSelector(
    (state: RootState) => state.Groups.groups,
  );

  return (
    <FlatList
      data={groups}
      renderItem={({item}: {item: Group}) => (
        <GroupCard navigation={props.navigation} group={item} />
      )}
      keyExtractor={(group: Group) => group.id}
      decelerationRate={0.798}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default GroupCards;
