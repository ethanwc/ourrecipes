import React from 'react';
import {Theme} from '../../assets/styles';
import {StyleSheet, View} from 'react-native';
import {Button, Icon} from 'react-native-elements';

export interface ListCardCreateProps {
  onPress: Function;
}

const ListCardCreate = (props: ListCardCreateProps) => {
  const checkbox = (
    <Icon type={'feather'} color={Theme.Light.caption} name={'plus'} />
  );

  return (
    <View style={listCardCreateStyle.container}>
      <Button
        type="outline"
        onPress={() => props.onPress()}
        icon={checkbox}
        titleStyle={{color: Theme.Light.caption}}
        buttonStyle={{borderColor: Theme.Light.caption}}
        containerStyle={{
          backgroundColor: Theme.Light.shadow,
        }}
      />
    </View>
  );
};

const listCardCreateStyle = StyleSheet.create({
  container: {},
  // container: {
  //     backgroundColor: Theme.Light.shadow,
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     padding: 10,
  // }
});

export default ListCardCreate;
