import React, { useState } from 'react'
import { ListItem, Icon } from 'react-native-elements'
import { Theme, Typography } from '../../assets/styles';
import { StyleSheet, View, Text } from 'react-native';
import { Menu, MenuTrigger, MenuOptions, MenuOption } from 'react-native-popup-menu';
import { ShoppingListItem } from 'src/redux/shoppinglist/types';
import { remove } from '../../redux/shoppinglist/actions';
import { useDispatch } from 'react-redux';


//todo: animate
//todo: edit, sort
//swipe to delete
const ListCard = (props: ShoppingListItem) => {
    const dispatch = useDispatch();
    const verticalIcon =
        <View>
            <Menu>
                <MenuTrigger><Icon name={'more-vertical'} type={'feather'} color={Theme.Light.caption} /></MenuTrigger>
                <MenuOptions optionsContainerStyle={{ width: 'auto' }}>
                    <MenuOption onSelect={() => console.log(`Edit`)} >
                        <Text style={{ ...Typography.Typography.subheader, padding: 5 }}>Edit Item</Text>
                    </MenuOption>
                    <MenuOption onSelect={() => dispatch(remove(props.id))} >
                        <Text style={{ ...Typography.Typography.subheader, padding: 5 }}>Delete Item</Text>
                    </MenuOption>
                </MenuOptions>
            </Menu>
        </View>;


    const [isChecked, setIsChecked] = useState(props.checked)
    const checkbox = <Icon type={'feather'} color={Theme.Light.caption} name={isChecked ? 'check-square' : 'square'} onPress={() => setIsChecked(!isChecked)} />
    return <ListItem
        title={props.name}
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