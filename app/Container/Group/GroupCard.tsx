import React from 'react'
import { ListItem } from 'react-native-elements'
import { Theme, Typography } from '../../assets/styles';

export interface groupCardProps {
    // groupName: string;
    // membersCount: number;
    navigation: any;
}

const GroupCard = (props: groupCardProps) => {
    return (
        <ListItem
            onPress={() => props.navigation.navigate('Group', { screen: 'Group', params: {} })}
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
        />
    )
}

export default GroupCard;
