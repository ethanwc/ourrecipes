import React from 'react'
import { ListItem, Icon, Text } from 'react-native-elements'
import { Theme, Typography } from '../../assets/styles';
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';
import { View } from 'react-native';
export interface groupCardProps {
    // groupName: string;
    // membersCount: number;
    navigation: any;
}


const GroupCard = (props: groupCardProps) => {
    const settingsIcon =
        <View>
            <Menu>
                <MenuTrigger><Icon name={'more-vertical'} type={'feather'} color={Theme.Light.caption} /></MenuTrigger>
                <MenuOptions>
                    <MenuOption onSelect={() => console.log(`Save`)} text='Save' />
                    <MenuOption onSelect={() => console.log(`Delete`)} >
                        <Text style={{ color: 'red' }}>Delete</Text>
                    </MenuOption>
                    <MenuOption onSelect={() => console.log(`Not called`)} disabled={true} text='Disabled' />
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
            rightIcon={settingsIcon}
        />
    )
}

export default GroupCard;
