import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import GroupCard from '../../Container/Group/GroupCard';

export interface groupCardsProps {
    navigation: any
}

const DATA = [
    { title: 'steve' },
    { title: 'jobs' },
    { title: 'is' },
    { title: 'dead' },
];

const GroupCards = (props: groupCardsProps) => {
    return (
        <FlatList
            data={DATA}
            renderItem={({ item, index }) => (
                <GroupCard navigation={props.navigation}/>
            )}
            keyExtractor={(item) => item.title}
            decelerationRate={0.798}
            showsHorizontalScrollIndicator={false}
        />
    )
}

export default GroupCards;