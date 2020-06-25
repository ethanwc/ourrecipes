import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {Overlay, Button, Input} from 'react-native-elements';
import {Theme, Typography} from '../../assets/styles';
import {
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/Feather';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import {ShoppingListItem} from 'src/redux/shoppinglist/types';
import {add} from '../../redux/shoppinglist/actions';

export interface CreateListItemProps {
  isVisible: boolean;
  setVisible: Function;
}

const CreateListItem = (props: CreateListItemProps) => {
  const [itemName, setItemName] = useState('');
  const dispatch = useDispatch();

  // Add item to list
  const createItem = () => {
    const payload: ShoppingListItem = {
      id: uuidv4(),
      name: itemName,
      checked: false,
      creationDate: new Date(),
    };
    setItemName('');
    dispatch(add(payload));
    props.setVisible(false);
  };

  return (
    <Overlay
      isVisible={props.isVisible}
      onBackdropPress={() => props.setVisible()}>
      <View style={CreateListItemStyle.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={Typography.Typography.header}>Add Item</Text>
          <Icon
            name="x"
            size={30}
            color={Theme.Light.headline}
            onPress={() => props.setVisible()}
          />
        </View>
        <Input
          placeholder={'Item Name'}
          textAlignVertical={'top'}
          containerStyle={{paddingHorizontal: 0}}
          autoFocus={true}
          value={itemName}
          onChangeText={(name: string) => setItemName(name)}
        />
        <Button
          title="Create"
          type="outline"
          onPress={() => createItem()}
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

const CreateListItemStyle = StyleSheet.create({
  container: {
    width: responsiveScreenWidth(75),
    padding: responsiveWidth(2.5),
  },
});

export default CreateListItem;
