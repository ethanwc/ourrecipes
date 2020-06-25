import React, { useState } from 'react';
import {FlatList, SafeAreaView, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../App';
import ListCard from '../../containers/ShoppingList/ListCard';
import ListCardCreate from '../../containers/ShoppingList/ListCardCreate';
import {ShoppingListItem} from '../../redux/shoppinglist/types';
import CreateListItem from './CreateListItem';
import EditListItem from './EditListItem';

const ShoppingList = () => {
  const items: ShoppingListItem[] = useSelector(
    (state: RootState) => state.ShoppingList.items,
  );
  const [addItemModal, setAddItemModal] = useState(false);
  const [editItemModal, setEditItemModal] = useState(false);
  const [editItem, setEditItem] = useState<ShoppingListItem | any>(undefined);

  // Pass item to edit to modal
  const setupEditItem = (item: ShoppingListItem) => {
      if (item && item !== undefined) {
          setEditItemModal(true);
        setEditItem(item);
      }
  }

  const editRender = editItemModal ? <EditListItem isVisible={editItemModal} setVisible={() => setEditItemModal(!editItemModal)} oldItem={editItem} />  : null;

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flexGrow: 1}}>
        <FlatList
          data={items}
          renderItem={({item}: {item: ShoppingListItem}) => (
            <ListCard
              item={item}
              editItem={(item: ShoppingListItem) => setupEditItem(item)}
            />
          )}
          keyExtractor={(item: ShoppingListItem) => item.id}
          decelerationRate={0.798}
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
      <CreateListItem isVisible={addItemModal} setVisible={() => setAddItemModal(!addItemModal)} />
      {editRender} 
      <ListCardCreate onPress={() => setAddItemModal(!addItemModal)}/>
    </SafeAreaView>
  );
};

export default ShoppingList;
