import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {AirbnbRating} from 'react-native-elements';
import {Theme, Typography} from '../../assets/styles';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import {Review} from 'src/redux/recipe/types';

const ReviewCard = (props: Review) => {
  return (
    <View style={reviewCardStyle.container}>
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
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
              defaultRating={props.rating}
            />
          </View>
        </View>
        <Text style={{...Typography.Typography.body, marginTop: 15}}>
          {props.review}
        </Text>
      </View>
    </View>
  );
};

const reviewCardStyle = StyleSheet.create({
  container: {
    padding: responsiveWidth(2.5),
    justifyContent: 'space-between',
    backgroundColor: Theme.Light.shadow,
    borderBottomColor: Theme.Light.body,
    borderBottomWidth: 0.3,
  },
});

export default ReviewCard;
