import React, { useState } from 'react'
import { Theme, Typography } from '../../assets/styles';
import { StyleSheet, View } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../../redux/shoppinglist/actions';
import { ShoppingListItem } from 'src/redux/shoppinglist/types';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

const ListCardCreate = () => {
    const dispatch = useDispatch();
    const checkbox = <Icon type={'feather'} color={Theme.Light.caption} name={'plus'} />

    // Add shopping list item
    const addItem = () => {
        const payload: ShoppingListItem = {
            id: uuidv4(),
            name: 'test',
            checked: false,
            creationDate: new Date()
        }
        dispatch(add(payload));
    }

    return <View style={listCardCreateStyle.container}>
        <Button
            type="outline"
            onPress={() => addItem()}
            icon={checkbox}
            titleStyle={{ color: Theme.Light.caption }}
            buttonStyle={{ borderColor: Theme.Light.caption }}
            containerStyle={{
                backgroundColor: Theme.Light.shadow,
            }}
        />
    </View>
}

const listCardCreateStyle = StyleSheet.create({
    container: {
    }
    // container: {
    //     backgroundColor: Theme.Light.shadow,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     padding: 10,
    // }
})

export default ListCardCreate;