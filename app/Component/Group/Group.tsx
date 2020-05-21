import React from 'react'
import { View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import RecipeCard from '../../Container/Recipe/RecipeCard'

const DATA = [
    { title: 'steve' },
    { title: 'jobs' },
    { title: 'is' },
    { title: 'dead' },
];

export interface groupProps {
    navigation: any
}

const Group = (props: groupProps) => {
    return (
        <View>
            <FlatList
                data={DATA}
                renderItem={({ item, index }) => (
                    <RecipeCard isFirst={index === 0} renderAuthor={true} navigation={props.navigation} size={'large'} />
                )}
                keyExtractor={(item) => item.title}
                decelerationRate={0.798}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default Group;