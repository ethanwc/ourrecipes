import React from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import {Theme, Typography} from '../../assets/styles';
import {
  responsiveWidth,
  responsiveScreenWidth,
  useResponsiveScreenWidth,
  useResponsiveWidth,
} from 'react-native-responsive-dimensions';
import {StackedBarChart, ChartConfig} from 'react-native-chart-kit';
export interface RatingCardProps {
  review: string;
  rating: number;
  reviewTime: Date;
  reviewAuthor: string;
}

export interface RatingBarProps {
  rating: number;
  count: number;
  distribution: number;
}

const RatingBar = (props: RatingBarProps) => {
  return (
    <View style={{flex: 3}}>
      <View style={ratingCardStyle.ratingRow}>
        <View style={ratingCardStyle.ratingStar}>
          <Text style={Typography.Typography.bodyflat}>
            {props.rating} star
          </Text>
        </View>
        <View style={ratingCardStyle.ratingBarWrapper}>
          <View style={ratingCardStyle.ratingBarBack} />
          <View
            style={{
              ...ratingCardStyle.ratingBarFront,
              width: `${props.distribution}%`,
            }}
          />
        </View>
        <View style={ratingCardStyle.ratingCount}>
          <Text style={Typography.Typography.bodyflat}>({props.count})</Text>
        </View>
      </View>
    </View>
  );
};

const RatingCard = () => {
  return (
    <View style={ratingCardStyle.container}>
      {/* Out of 5 star */}
      <View style={ratingCardStyle.ratingCountWrapper}>
        <View
          style={{
            borderBottomColor: Theme.Light.body,
            borderBottomWidth: 0.5,
            marginBottom: 5,
            paddingBottom: 5,
          }}>
          <Text style={Typography.Typography.header}>4.5</Text>
        </View>
        <Text style={Typography.Typography.subheader}>5</Text>
      </View>
      {/* Star ratings */}
      <View style={{flex: 3}}>
        <RatingBar count={15} distribution={40} rating={5} />
        <RatingBar count={43} distribution={10} rating={4} />
        <RatingBar count={3} distribution={20} rating={3} />
        <RatingBar count={22} distribution={13} rating={2} />
        <RatingBar count={17} distribution={24} rating={1} />
      </View>
    </View>
  );
};

const ratingCardStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // margin: 10,
    padding: responsiveWidth(2.5),
    borderRadius: 5,
    // padding: 15,
    backgroundColor: Theme.Light.shadow,
    borderBottomWidth: 0.3,
    borderBottomColor: Theme.Light.body,
  },
  ratingCountWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 15,
    borderRightColor: Theme.Light.body,
    borderRightWidth: 0.5,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingStar: {
    flex: 1,
    alignItems: 'flex-end',
  },
  ratingCount: {
    flex: 1,
    alignItems: 'flex-start',
  },
  ratingBarWrapper: {
    flex: 2,
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  ratingBarFront: {
    backgroundColor: Theme.Light.caption,
    height: 8,
    borderRadius: 10,
    alignSelf: 'center',
    position: 'absolute',
  },
  ratingBarBack: {
    flex: 1,
    backgroundColor: Theme.Light.body,
    opacity: 0.4,
    height: 7,
    alignSelf: 'center',
    borderRadius: 10,
  },
});

export default RatingCard;
