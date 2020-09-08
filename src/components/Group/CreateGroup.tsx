import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Overlay, Button, Input} from 'react-native-elements';
import {Theme, Typography} from '../../assets/styles';
import {
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/Feather';
import {useDispatch} from 'react-redux';
import {add, createGroupAsync} from '../../redux/group/actions';
import {Group} from '../../redux/group/types';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

export interface createGroupProps {
  isVisible: boolean;
  setVisible: Function;
}

const CreateGroup = (props: createGroupProps) => {
  const [groupName, setGroupName] = useState('');
  const dispatch = useDispatch();

  const createGroup = () => {
    console.log('create');
    // if (groupName) {
    //   const payload: Group = {
    //     id: uuidv4(),
    //     name: groupName,
    //     creationDate: new Date(),
    //     creatorid: 'asdf',
    //     memberids: ['asdf', 'aabb'],
    //   };
    //   setGroupName('');
    //   dispatch(add(payload));
    //   props.setVisible(false);
    // }
    dispatch(createGroupAsync());
  };

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
            onPress={() => {
              setGroupName('');
              props.setVisible();
            }}
          />
        </View>
        <Input
          placeholder={'Group Name'}
          textAlignVertical={'top'}
          autoFocus={true}
          containerStyle={{paddingHorizontal: 0}}
          value={groupName}
          onChangeText={(name: string) => setGroupName(name)}
        />
        <Button
          title="Create"
          type="outline"
          onPress={() => createGroup()}
          titleStyle={{color: Theme.Light.caption}}
          buttonStyle={{borderColor: Theme.Light.caption}}
          containerStyle={{
            borderWidth: 1,
            borderColor: Theme.Light.caption,
          }}
        />
      </View>
    </Overlay>
  );
};

const createGroupStyle = StyleSheet.create({
  container: {
    width: responsiveScreenWidth(75),
    padding: responsiveWidth(2.5),
  },
});

export default CreateGroup;
