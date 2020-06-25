import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { ListItem, Icon } from 'react-native-elements'
import { Menu, MenuTrigger, MenuOptions, MenuOption } from 'react-native-popup-menu';
import { ShoppingListItem } from '../../redux/shoppinglist/types';
import { Theme, Typography } from '../../assets/styles';
import { remove } from '../../redux/shoppinglist/actions';

export interface ListCardProps {
    item: ShoppingListItem;
    editItem: Function;
}
//todo: animate????????
//todo: sort
//swipe to delete
const ListCard = (props: ListCardProps) => {
    const dispatch = useDispatch();
    const [isChecked, setIsChecked] = useState(props.item.checked);

    const verticalIcon =
        <View>
            <Menu>
                <MenuTrigger><Icon name={'more-vertical'} type={'feather'} color={Theme.Light.caption} /></MenuTrigger>
                <MenuOptions optionsContainerStyle={{ width: 'auto' }}>
                    <MenuOption onSelect={() => props.editItem(props.item)} >
                        <Text style={{ ...Typography.Typography.subheader, padding: 5 }}>Edit Item</Text>
                    </MenuOption>
                    <MenuOption onSelect={() => dispatch(remove(props.item.id))} >
                        <Text style={{ ...Typography.Typography.subheader, padding: 5 }}>Delete Item</Text>
                    </MenuOption>
                </MenuOptions>
            </Menu>
        </View>;


    const checkbox = <Icon type={'feather'} color={Theme.Light.caption} name={isChecked ? 'check-square' : 'square'} onPress={() => setIsChecked(!isChecked)} />
    return <ListItem
        title={props.item.name}
        onPress={() => setIsChecked(!isChecked)}
        onLongPress={() => console.log('should open menu')}
        titleStyle={isChecked ? listCardStyle.checkedtext : listCardStyle.uncheckedtext}
        bottomDivider
        leftIcon={checkbox}
        rightIcon={verticalIcon}
    />
}

const listCardStyle = StyleSheet.create({
    checkedtext: {
        ...Typography.Typography.header, textDecorationLine: 'line-through',
    },
    uncheckedtext: {
        ...Typography.Typography.header
    },
})

export default ListCard;