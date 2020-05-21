import React from 'react'
import ListCard from '../../Container/ShoppingList/ListCard';
import ListCardCreate from '../../Container/ShoppingList/ListCardCreate';

import { View } from 'react-native';

const Bookmarks = () => {
    return (
        <View>
            <ListCard checked={true} />
            <ListCard checked={false}/>
            <ListCard checked={true}/>
            <ListCardCreate />
        </View>
    )
}

export default Bookmarks;
