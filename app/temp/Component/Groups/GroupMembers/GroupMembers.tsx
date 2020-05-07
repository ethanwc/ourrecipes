import React from 'react';
import GroupCard from '../../../Container/Group/GroupCard';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {Overlay} from 'react-native-elements';
import {Colors, Typography} from '../../../styles';
import {
  responsiveScreenWidth,
  responsiveScreenHeight,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import MemberCard from '../../../Container/Member/MemberCard';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Navigation} from 'react-native-navigation';

export interface groupMembersProps {
  isVisible: boolean;
  setVisible: Function;
}

const GroupMembers = (props: groupMembersProps) => {
  return (
    <Overlay
      isVisible={props.isVisible}
      onBackdropPress={() => props.setVisible()}>
      <View style={groupMembersStyle.container}>
        <View
          style={{
            margin: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={Typography.lightThemeText.footnoteHeader}>
            Group Members
          </Text>
          <Icon
            name="times"
            size={30}
            color={Colors.lightTheme.textSecondary}
            onPress={() => props.setVisible()}
          />
        </View>
        <SafeAreaView>
          <ScrollView style={{maxHeight: responsiveScreenHeight(40)}}>
            <MemberCard />
            <MemberCard />
            <MemberCard />
            <MemberCard />
            <MemberCard />
            <MemberCard />
            <MemberCard />
          </ScrollView>
        </SafeAreaView>
      </View>
    </Overlay>
  );
};

const groupMembersStyle = StyleSheet.create({
  container: {
    width: responsiveScreenWidth(75),
  },
});

export default GroupMembers;
