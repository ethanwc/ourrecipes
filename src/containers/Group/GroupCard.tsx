import React from 'react';
import {View} from 'react-native';
import {ListItem, Icon, Text} from 'react-native-elements';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import {useDispatch} from 'react-redux';

import {Theme, Typography} from '../../assets/styles';
import {remove} from '../../redux/group/actions';
import {Group} from '../../redux/group/types';

export interface GroupCardProps {
  group: Group;
  navigation: any;
}

const GroupCard = (props: GroupCardProps) => {
  const dispatch = useDispatch();

  const verticalIcon = (
    <View>
      <Menu>
        <MenuTrigger>
          <Icon
            name={'more-vertical'}
            type={'feather'}
            color={Theme.Light.caption}
          />
        </MenuTrigger>
        <MenuOptions optionsContainerStyle={{width: 'auto'}}>
          <MenuOption onSelect={() => console.log(`Delete`)}>
            <Text style={{...Typography.Typography.subheader, padding: 5}}>
              Invite Members
            </Text>
          </MenuOption>
          <MenuOption onSelect={() => dispatch(remove(props.group.id))}>
            <Text style={{...Typography.Typography.subheader, padding: 5}}>
              Leave Group
            </Text>
          </MenuOption>
        </MenuOptions>
      </Menu>
    </View>
  );
  return (
    <ListItem
      onPress={() =>
        props.navigation.navigate('Group', {screen: 'Group', params: {}})
      }
      title={props.group.name}
      titleStyle={Typography.Typography.header}
      subtitle={`${props.group.membercount} members`}
      subtitleStyle={Typography.Typography.bodyflat}
      bottomDivider
      rightIcon={verticalIcon}
    />
  );
};

export default GroupCard;
