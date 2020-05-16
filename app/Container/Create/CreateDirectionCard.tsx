import 'react-native-gesture-handler'
import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import { Theme, Typography } from '../../assets/styles';
import { Input, Icon } from 'react-native-elements';
import VoiceWrapper from '../../utils/VoiceWrapper/VoiceWrapper';
import wordsToNumbers from 'words-to-numbers';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { TextInput } from 'react-native-gesture-handler';

var parser = require('ingredients-parser');

export interface createDirectionCardProps {
    // amount: Number;
    // ingredient: string;
    // unit: string;
}

const CreateDirectionCard = (props: createDirectionCardProps) => {
    const [input, setInput] = useState('');

    const clearIcon = input ?
        <Icon onPress={() => setInput('')} style={createDirectionCardStyle.icon} type={'feather'} name={'x'} onPressIn={() => setInput('')} color={Theme.Light.caption} style={{ alignSelf: 'flex-start' }} />
        : null;

    return (
        <View style={createDirectionCardStyle.container}>
            <TextInput editable={false} placeholder={'Step 1'} style={createDirectionCardStyle.step} />
            <TextInput multiline={true} placeholder={'Directions'} value={input} onChangeText={(text: string) => setInput(text)} style={createDirectionCardStyle.input} onSubmitEditing={() => console.log('submitted')} />
            {clearIcon}
        </View>
    );
};

const createDirectionCardStyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: Theme.Light.shadow,
        borderRadius: 5,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginTop: 10,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    step: {
        ...Typography.Typography.subheader,
        color: Theme.Light.headline,
        marginRight: 10,
        alignSelf: 'flex-start',
    },
    input: {
        flex: 1,
        ...Typography.Typography.subheader,
        color: Theme.Light.caption,
    },
    icon: {
        alignSelf: 'flex-start',
        margin: 10,
        padding: 10,
        flex: 1,
    }
});

export default CreateDirectionCard;
