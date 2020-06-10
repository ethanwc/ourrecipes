import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {AirbnbRating} from 'react-native-elements';
import {Theme, Typography} from '../../assets/styles';
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
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
              <Image
            style={{ width: responsiveWidth(25), height: responsiveWidth(25), alignSelf: 'flex-start', borderRadius: 5 }}
            source={require('../../assets/images/food.jpg')}
          />
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
                <Text style={Typography.Typography.subheader}>Chicken Pot Pie</Text>
                <Text style={{...Typography.Typography.bodyflat, marginTop: 4}}>2 hours ago</Text>
              </View>
              <View style={{alignSelf: 'flex-start'}}>
                <AirbnbRating
                  size={14}
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
    // margin: 5,
    // marginBottom: 2.5,
    // padding: 5,
    margin: responsiveWidth(1.25),
    padding: responsiveWidth(1.25),
    paddingBottom: 0,
    marginHorizontal: 0,
    backgroundColor: Theme.Light.shadow,
    borderBottomColor: Theme.Light.body,
    borderBottomWidth: 0.3,
    borderRadius: 5,
  },
});

export default ReviewCard;
