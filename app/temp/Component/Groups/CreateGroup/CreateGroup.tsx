import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Overlay} from 'react-native-elements';
import {Colors, Typography} from '../../../styles';
import {responsiveScreenWidth} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/FontAwesome';

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
            margin: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={Typography.lightThemeText.footnoteHeader}>
            Create Group
          </Text>
          <Icon
            name="times"
            size={30}
            color={Colors.lightTheme.textSecondary}
     
            onPress={() => props.setVisible()}
          />
        </View>

        <View style={{margin: 5}}>
          <Text style={Typography.lightThemeText.bodyUnimportantText}>
            Group Name
          </Text>
        </View>
        <TextInput
          value={groupName}
          onChangeText={(text: string) => setGroupName(text)}
          maxLength={50}
          style={{
            backgroundColor: Colors.lightTheme.textSecondary,
            opacity: 0.4,
          }}
        />
        <TouchableOpacity
          style={createGroupStyle.createButton}
          onPress={() => console.log('create group pressed')}>
          <Text style={Typography.lightThemeText.mainHeader}>Create</Text>
        </TouchableOpacity>
      </View>
    </Overlay>
  );
};

const createGroupStyle = StyleSheet.create({
  container: {
    width: responsiveScreenWidth(75),
  },
  createButton: {
    backgroundColor: Colors.lightTheme.textFootnote,
    opacity: 0.8,
    padding: 10,
    borderRadius: 4,
    marginVertical: 15,
  },
});

export default CreateGroup;
