import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import GroupCards from '../../components/Group/GroupCards';
import Icon from 'react-native-vector-icons/Feather';
import {Theme} from '../../assets/styles';
import CreateGroup from '../../components/Group/CreateGroup';
import {getGroups} from '../../redux/group/actions';

/**
 * Groups page of app
 */
const Groups = ({navigation}: any) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getGroups();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
        <GroupCards navigation={navigation} />
      <TouchableOpacity
        style={groupsStyle.createButton}
        onPress={() => setShowModal(!showModal)}>
        <Icon name={'plus'} size={40} color={Theme.Light.caption} />
      </TouchableOpacity>
      <CreateGroup
        isVisible={showModal}
        setVisible={() => setShowModal(!showModal)}
      />
    </SafeAreaView>
  );
};

const groupsStyle = StyleSheet.create({
  container: {},
  createButton: {
    borderRadius: 100,
    backgroundColor: Theme.Light.background,
    position: 'absolute',
    bottom: 15,
    right: 15,
    padding: 10,
  },
});

export default Groups;
