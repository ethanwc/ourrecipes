import React, { useState, useEffect } from 'react'
import ListCard from '../../containers/ShoppingList/ListCard';
import ListCardCreate from '../../containers/ShoppingList/ListCardCreate';

import { View, FlatList, SafeAreaView, ScrollView, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ShoppinglistState, ShoppingListItem } from '../../redux/shoppinglist/types';
import { RootState } from '../../App';

const Bookmarks = () => {
    const items: ShoppingListItem[] = useSelector((state: RootState) => state.ShoppingList.items);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={{ flexGrow: 1 }}>
                <FlatList
                    data={items}
                    renderItem={({ item }: { item: ShoppingListItem }) => (
                        <ListCard id={item.id} name={item.name} checked={item.checked} creationDate={item.creationDate} />
                    )}
                    keyExtractor={(item: ShoppingListItem) => item.id}
                    decelerationRate={0.798}
                    showsHorizontalScrollIndicator={false}
                />
            </ScrollView>
            <ListCardCreate />
        </SafeAreaView>
    )
}

export default Bookmarks;
