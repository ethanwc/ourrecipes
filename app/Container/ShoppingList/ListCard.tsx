import React, { useState } from 'react'
import { ListItem, Icon } from 'react-native-elements'
import { Theme, Typography } from '../../assets/styles';
import { StyleSheet } from 'react-native';

export interface listCardProps {
    // ingredient: string;
    checked: boolean;
}

//todo: animate
//todo: edit, sort
//swipe to delete
const ListCard = (props: listCardProps) => {
    const [isChecked, setIsChecked] = useState(props.checked)
    const settingsIcon = <Icon type={'feather'} color={Theme.Light.caption} name={'more-vertical'} onPress={() => console.log('set p ')} />;
    const checkbox = <Icon type={'feather'} color={Theme.Light.caption} name={isChecked ? 'check-square' : 'square'} onPress={() => setIsChecked(!isChecked)} />
    return <ListItem
        title={'Eggs'}
        onPress={() => setIsChecked(!isChecked)}
        onLongPress={() => console.log('should open menu')}
        titleStyle={isChecked ? listCardStyle.checkedtext : listCardStyle.uncheckedtext}
        bottomDivider
        leftIcon={checkbox}
        rightIcon={settingsIcon}
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