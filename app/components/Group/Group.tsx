import React, { useState } from 'react'
import { View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import LargeRecipeCard from '../../containers/Recipe/LargeRecipeCard'
import Icon from 'react-native-vector-icons/Feather';
import { Theme } from '../../assets/styles';
import GroupMembers from '../../containers/Group/GroupMembers';

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
    const [isDisplayed, setIsDisplayed] = useState(false);
    
    props.navigation.setOptions({
        headerShown: true,
        headerTitle: 'Rielhouse',
        headerRight: () => <Icon
            name={'user'}
            size={30}
            color={Theme.Light.headline}
            style={{ marginRight: 10 }}
            onPress={() => setIsDisplayed(!isDisplayed)}
        />,
    });
    return (
        <View>
            <GroupMembers isDisplayed={isDisplayed} toggleOverlay={() => setIsDisplayed(!isDisplayed)}/>
            <FlatList
                data={DATA}
                renderItem={({ item, index }) => (
                    <LargeRecipeCard renderAuthor={true} navigation={props.navigation} size={'large'} />
                )}
                keyExtractor={(item) => item.title}
                decelerationRate={0.798}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default Group;