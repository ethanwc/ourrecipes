import React from 'react'
import { ListItem, Icon } from 'react-native-elements'
import { Theme, Typography } from '../../assets/styles';

export interface groupCardProps {
    // groupName: string;
    // membersCount: number;
    navigation: any;
}


const GroupCard = (props: groupCardProps) => {
    const settingsIcon = <Icon type={'feather'} color={Theme.Light.caption} name={'more-vertical'} onPress={() => console.log('set p ')} />;
    return (
        <ListItem
            onPress={() => props.navigation.navigate('Group', { screen: 'Group', params: {} })}
            title={'RielHouse'}
            titleStyle={Typography.Typography.header}
            subtitle={'10 members'}
            subtitleStyle={Typography.Typography.bodyflat}
            bottomDivider
            rightIcon={settingsIcon}
        />
    )
}

export default GroupCard;
