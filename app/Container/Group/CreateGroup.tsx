import React, { useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';
import { Overlay, Button, Input } from 'react-native-elements';
import { Theme, Typography } from '../../assets/styles';
import { responsiveScreenWidth } from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/Feather';

export interface createGroupProps {
    isVisible: boolean;
    setVisible: Function;
}

const CreateGroup = (props: createGroupProps) => {
    const [groupName, setGroupName] = useState('');
    return (
        <Overlay
            isVisible={props.isVisible}
            onBackdropPress={() => props.setVisible()}>
            <View style={createGroupStyle.container}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                    <Text style={Typography.Typography.header}>Create Group</Text>
                    <Icon
                        name="x"
                        size={30}
                        color={Theme.Light.headline}
                        onPress={() => props.setVisible()}
                    />
                </View>
                <Input
                    placeholder={"Group Name"}
                    textAlignVertical={'top'}
                    value={groupName}
                    onChangeText={(name: string) => setGroupName(name)}
                />
                <Button
                    title="Create"
                    type="outline"
                    onPress={() => console.log('create group')}
                    titleStyle={{ color: Theme.Light.caption }}
                    buttonStyle={{ borderColor: Theme.Light.caption }}
                    containerStyle={{
                        borderWidth: 1,
                        borderColor: Theme.Light.caption,
                        marginBottom: 10,
                    }}
                />
            </View>
        </Overlay>
    );
};

const createGroupStyle = StyleSheet.create({
    container: {
        width: responsiveScreenWidth(75),
    },
});

export default CreateGroup;
