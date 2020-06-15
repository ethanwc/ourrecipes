import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AirbnbRating } from 'react-native-elements';
import { Theme, Typography } from '../../assets/styles';
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
      <View>
        <View
          style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            <Text style={Typography.Typography.subheader}>Deba Boyd</Text>
            <Text style={{ ...Typography.Typography.bodyflat, marginTop: 4 }}>2 hours ago</Text>
          </View>
          <View style={{ alignSelf: 'flex-start' }}>
            <AirbnbRating
              size={16}
              showRating={false}
              isDisabled={true}
              defaultRating={1}
            />
          </View>
        </View>
        <Text style={{ ...Typography.Typography.body, marginTop: 15 }}>
          Wow so for this recipe I actually am very disappointed there are
          no vegan options listed - 1 star.</Text>
      </View>
    </View>
  );
};

const reviewCardStyle = StyleSheet.create({
  container: {
    padding: responsiveWidth(2.5),
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Theme.Light.shadow,
    borderBottomColor: Theme.Light.body,
    borderBottomWidth: 0.3,
  },
});

export default ReviewCard;
