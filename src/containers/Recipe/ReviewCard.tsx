import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Avatar, Button, AirbnbRating} from 'react-native-elements';
import {Theme, Typography} from '../../assets/styles';
import { responsiveWidth } from 'react-native-responsive-dimensions';

export interface ReviewCardProps {
  review: string;
  rating: number;
  reviewTime: Date;
  reviewAuthor: string;
}

const ReviewCard = () => {
  return (
    <View style={reviewCardStyle.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{alignSelf: 'flex-start'}}>
          <Avatar
            rounded
            size={'medium'}
            source={{
              uri:
                'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            flex: 1,
          }}>
          <View style={{marginLeft: 15}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <Text style={Typography.Typography.subheader}>Deba Boyd</Text>
                <Text style={{...Typography.Typography.bodyflat, marginTop: 4}}>
                  2 hours ago
                </Text>
              </View>
              <View style={{alignSelf: 'flex-start'}}>
                <AirbnbRating
                  size={16}
                  showRating={false}
                  isDisabled={true}
                  defaultRating={1}
                />
              </View>
            </View>
            <Text style={{...Typography.Typography.body, marginTop: 15}}>
              Wow so for this recipe I actually am very disappointed there are
              no vegan options listed - 1 star.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const reviewCardStyle = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    // margin: 10,
    // borderRadius: 5,
    // padding: 15,
    padding: responsiveWidth(2.5),
    backgroundColor: Theme.Light.shadow,
    borderBottomWidth: 0.3,
    borderBottomColor: Theme.Light.body,
  },
});

export default ReviewCard;
