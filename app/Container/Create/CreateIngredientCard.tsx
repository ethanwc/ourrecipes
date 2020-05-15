import 'react-native-gesture-handler'
import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import { Theme, Typography } from '../../assets/styles';
import { Input, Icon } from 'react-native-elements';
import VoiceWrapper from '../../utils/VoiceWrapper/VoiceWrapper';
import wordsToNumbers from 'words-to-numbers';
import Swipeable from 'react-native-gesture-handler/Swipeable';

var parser = require('ingredients-parser');

export interface createIngredientCardProps {
    // amount: Number;
    // ingredient: string;
    // unit: string;
}

const CreateIngredientCard = (props: createIngredientCardProps) => {
    const [input, setInput] = useState('');
    
    const clearIcon = input ?
        <Icon onPress={() => setInput('')} type={'feather'} name={'x'} onPressIn={() => setInput('')} />
        :
        <Icon onPress={() => setInput('')} type={'feather'} name={'x'} size={0} onPressIn={() => setInput('')} />

    return (

        <View style={createIngredientCardStyle.container}>
            <Input placeholder={'Ingredient'} value={input} onChangeText={(text: string) => setInput(text)} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)}
                editable={true}
                rightIcon={clearIcon} />
        </View>

    );
};

const createIngredientCardStyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        padding: 0,
        justifyContent: 'space-between',
        backgroundColor: Theme.Light.shadow,
        borderBottomWidth: 0.3,
        borderBottomColor: Theme.Light.body,
    },
});

export default CreateIngredientCard;
