import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { Typography, Theme } from '../../assets/styles';

const Description = () => {
    return (
        <View style={descriptionStyle.container}>
            <Text style={descriptionStyle.bio}>
                Inventor of the iPod. Dier of the cancer. Hater of the macrohard. Lover of apples, slayer of living. All in a day's work.
            </Text>
        </View>
    )
}

const descriptionStyle = StyleSheet.create({
    container: {
        padding: 15,
        flex: 1
    },
    bio: {
        ...Typography.Typography.subheader

    }
});


export default Description;