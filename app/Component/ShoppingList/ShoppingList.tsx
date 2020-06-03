import React, { useState, useEffect } from 'react'
import ListCard from '../../Container/ShoppingList/ListCard';
import ListCardCreate from '../../Container/ShoppingList/ListCardCreate';

import { View, FlatList, SafeAreaView, ScrollView } from 'react-native';

export interface bookmarkItem {

}

const Bookmarks = () => {
    const [shoppingItems, setShoppingItems] = useState(Array<String>());

    const addShoppingCard = () => setShoppingItems([...shoppingItems, 'z']);

    useEffect(() => {
        setShoppingItems(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l']);
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={{  flexGrow: 1 }}>
                <FlatList
                    data={shoppingItems}
                    renderItem={({ item }) => (
                        <ListCard checked={true} />
                    )}
                    keyExtractor={(item) => '1'}
                    decelerationRate={0.798}
                    showsHorizontalScrollIndicator={false}
                />
            </ScrollView>
                <ListCardCreate onPress={() => addShoppingCard()} />
        </SafeAreaView>

    )
}

export default Bookmarks;
