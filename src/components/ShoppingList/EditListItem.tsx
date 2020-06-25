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
import {ShoppingListItem} from 'src/redux/shoppinglist/types';
import {edit} from '../../redux/shoppinglist/actions';

export interface EditListItemProps {
  oldItem: ShoppingListItem;
  isVisible: boolean;
  setVisible: Function;
}

const EditListItem = (props: EditListItemProps) => {
  const [itemName, setItemName] = useState(props.oldItem.name);
  const dispatch = useDispatch();
  console.log(itemName);

  // Edit item in list
  const editItem = () => {
    const payload: ShoppingListItem = {
      id: props.oldItem.id,
      name: itemName,
      checked: props.oldItem.checked,
      creationDate: props.oldItem.creationDate,
    };
    dispatch(edit(payload));
    setItemName('');
    props.setVisible(false);
  };

  return (
    <Overlay
      isVisible={props.isVisible}
      onBackdropPress={() => props.setVisible()}>
      <View style={EditListItemStyle.container}>
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
          title="Confirm Edit"
          type="outline"
          onPress={() => editItem()}
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

const EditListItemStyle = StyleSheet.create({
  container: {
    width: responsiveScreenWidth(75),
    padding: responsiveWidth(2.5),
  },
});

export default EditListItem;
