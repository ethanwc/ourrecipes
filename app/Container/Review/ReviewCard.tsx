import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { AirbnbRating } from 'react-native-elements';
import { Theme, Typography } from '../../assets/styles';
import { responsiveWidth } from 'react-native-responsive-dimensions';

export interface ReviewCardProps {
  review: string;
  rating: number;
  reviewTime: Date;
  image: string;
}

const ReviewCard = () => {
  return (
    <View style={reviewCardStyle.container}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        {/* <Image
          style={{ width: responsiveWidth(25), height: responsiveWidth(25), alignSelf: 'flex-start', borderRadius: 0 }}
          source={require('../../assets/images/food.jpg')}
        /> */}
        <View
          style={{
            flex: 1,
            justifyContent: 'space-evenly',
            padding: responsiveWidth(1.25),
          }}>
          <View style={{ marginLeft: responsiveWidth(1.25) }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={Typography.Typography.subheader}>Chicken Pot Pie</Text>
              <AirbnbRating
                size={14}
                showRating={false}
                isDisabled={true}
                defaultRating={1}
              />
            </View>
            <View style={{}}>
              <Text style={{ ...Typography.Typography.bodyflat, marginTop: 4 }}>2 hours ago</Text>
              <Text numberOfLines={2} style={{ ...Typography.Typography.body, marginTop: 1 }}>
                Wow so for this recipe I actually am very disappointed there are
                no vegan options listed - 1 star.
            </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const reviewCardStyle = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    backgroundColor: Theme.Light.shadow,
    borderBottomColor: Theme.Light.body,
    borderBottomWidth: 0.3,
    borderRadius: 5,
  },
});

export default ReviewCard;
