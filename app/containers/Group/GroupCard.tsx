import React from 'react'
import { View } from 'react-native';
import { ListItem, Icon, Text } from 'react-native-elements'
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';
import { Theme, Typography } from '../../assets/styles';

export interface groupCardProps {
    // groupName: string;
    // membersCount: number;
    navigation: any;
}

const GroupCard = (props: groupCardProps) => {
    const verticalIcon =
        <View>
            <Menu>
                <MenuTrigger><Icon name={'more-vertical'} type={'feather'} color={Theme.Light.caption} /></MenuTrigger>
                <MenuOptions optionsContainerStyle={{ width: 'auto' }}>
                    <MenuOption onSelect={() => console.log(`Delete`)} >
                        <Text style={{...Typography.Typography.subheader, padding: 5}}>Invite Members</Text>
                    </MenuOption>
                    <MenuOption onSelect={() => console.log(`Delete`)} >
                        <Text style={{...Typography.Typography.subheader, padding: 5}}>Leave Group</Text>
                    </MenuOption>
                </MenuOptions>
            </Menu>
        </View>;
    return (
        <ListItem
            onPress={() => props.navigation.navigate('Group', { screen: 'Group', params: {} })}
            title={'RielHouse'}
            titleStyle={Typography.Typography.header}
            subtitle={'10 members'}
            subtitleStyle={Typography.Typography.bodyflat}
            bottomDivider
            rightIcon={verticalIcon}
        />
    )
}

export default GroupCard;
