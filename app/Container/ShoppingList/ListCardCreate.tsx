import React, { useState } from 'react'
import { Theme, Typography } from '../../assets/styles';
import { StyleSheet, View } from 'react-native';
import { Button, Icon } from 'react-native-elements';


const ListCardCreate = () => {
    const checkbox = <Icon type={'feather'} color={Theme.Light.caption} name={'plus'} />

    return <Button
        type="outline"
        onPress={() =>
            console.log('todo: nav to all comments / review page')
        }
        icon={
            checkbox
        }
        titleStyle={{ color: Theme.Light.caption }}
        buttonStyle={{ borderColor: Theme.Light.caption }}
        containerStyle={{
            backgroundColor: Theme.Light.shadow,
        }}
    />
}

const listCardCreateStyle = StyleSheet.create({
    container: {
        backgroundColor: Theme.Light.shadow,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    }
})

export default ListCardCreate;