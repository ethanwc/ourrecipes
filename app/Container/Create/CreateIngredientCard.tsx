import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import { Theme, Typography } from '../../assets/styles';
import { Input, Icon } from 'react-native-elements';

export interface createIngredientCardProps {
    amount: Number;
    ingredient: string;
    unit: string;
}

const CreateIngredientCard = (props: createIngredientCardProps) => {
    const [input, setInput] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const description = `${
        props.unit.charAt(0).toUpperCase() + props.unit.slice(1)
        } of ${props.ingredient.charAt(0).toUpperCase() + props.ingredient.slice(1)}`;

    const clearIcon = isFocused ?
        <Icon name={'x'} color={Theme.Light.caption} size={26} style={{ marginRight: 15 }} onPress={() => setInput('')} />
        : null;

    return (
        <TouchableHighlight>
            <View style={createIngredientCardStyle.container}>
                <Input placeholder={'Ingredient'} value={input} onChangeText={(text: string) => setInput(text)} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)}  
                leftIcon = {
                    <Icon onPress={() => setInput('')} type={'feather'} name={'mic'} onPressIn={() => setInput('')}/>

                }
                rightIcon={
                    <Icon onPress={() => setInput('')} type={'feather'} name={'x'} onPressIn={() => setInput('')}/>
                } />

                {/* <Text
                    style={{ ...Typography.Typography.subheader, paddingHorizontal: 15 }}>
                    {props.amount}
                </Text> */}
                {/* <Text style={Typography.Typography.subheader}>{description}</Text> */}
            </View>
        </TouchableHighlight>
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
