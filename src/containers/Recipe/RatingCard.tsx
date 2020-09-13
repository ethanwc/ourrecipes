import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import {Theme, Typography} from '../../assets/styles';

export interface RatingCardProps {
  reviewCount: number;
  reviewRating: number;
  reviewDistribution: Map<number, number>;
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
              width: `${props.distribution * 100}%`,
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

const RatingCard = (props: RatingCardProps) => {
  const asdf = [...props.reviewDistribution.entries()]
    .sort()
    .reverse()
    .map((value) => {
      return (
        <RatingBar
          count={value[1]}
          distribution={value[1] / props.reviewCount}
          rating={value[0]}
        />
      );
    });
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
          <Text style={Typography.Typography.header}>{props.reviewRating}</Text>
        </View>
        <Text style={Typography.Typography.subheader}>5</Text>
      </View>
      {/* Star ratings */}
      <View style={{flex: 3}}>{asdf}</View>
    </View>
  );
};

const ratingCardStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: responsiveWidth(2.5),
    borderRadius: 5,
    borderBottomWidth: 0.3,
    backgroundColor: Theme.Light.shadow,
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
