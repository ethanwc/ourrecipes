import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {Typography, Colors} from '../../styles/index';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import Recipes from '../Recipes/Recipes';
import Icon from 'react-native-vector-icons/FontAwesome';
export interface profileProps {}

const Profile = (props: profileProps) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const followText = isFollowing ? 'Following' : 'Follow';

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={profileStyle.container}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                ...Typography.lightThemeText.bodyUnimportantText,
                marginLeft: 5,
              }}>
              Jeff@amazon.com
            </Text>
            <Icon
              name="bars"
              size={24}
              color={Colors.lightTheme.textSecondary}
              style={{marginRight: 5, alignSelf: 'flex-end'}}
              onPress={() => console.log('asdf')}
            />
          </View>

          <View style={profileStyle.userinfoContainer}>
            {/* User profile and basic stats */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View style={{flex: 2}}>
                <Image
                  style={profileStyle.profilePhoto}
                  source={require('../../assets/img/jeff.jpg')}
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  flex: 3,
                }}>
                <View style={{alignItems: 'center'}}>
                  <Text style={Typography.lightThemeText.footnoteBody}>24</Text>
                  <Text style={Typography.lightThemeText.bodyUnimportantText}>
                    Recipes
                  </Text>
                </View>
                <View style={{alignItems: 'center'}}>
                  <Text style={Typography.lightThemeText.footnoteBody}>11</Text>
                  <Text style={Typography.lightThemeText.bodyUnimportantText}>
                    Followers
                  </Text>
                </View>
                <View style={{alignItems: 'center'}}>
                  <Text style={Typography.lightThemeText.footnoteBody}>1</Text>
                  <Text style={Typography.lightThemeText.bodyUnimportantText}>
                    Following
                  </Text>
                </View>
              </View>
            </View>

            <Text style={Typography.lightThemeText.mainHeader}>Jeff Bezos</Text>
            {/* BIO */}
            {/* <Text style={Typography.lightThemeText.bodyImporantText}>
              CEO @ Amazon | Technology lover | Richer than richy Rich if he
              copy righted dot com at age 7
            </Text> */}
            {/* Follow button */}
          </View>

          <Text
            style={{
              ...Typography.lightThemeText.mainHeader,
              marginLeft: 15,
              marginTop: 15,
              marginBottom: 10,
            }}>
            My Recipes
          </Text>
          <Recipes renderAuthor={false} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const profileStyle = StyleSheet.create({
  container: {
    marginTop: 5,
    backgroundColor: Colors.lightTheme.backgroundPrimary,
  },
  userinfoContainer: {
    marginHorizontal: 15,
    marginTop: 25,
  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 100,
    // marginBottom: 5,
    // marginRight: 10,
  },
  followButton: {
    backgroundColor: Colors.lightTheme.textSecondary,
    padding: 10,
    borderRadius: 4,
    marginVertical: 15,
  },
});

export default Profile;
