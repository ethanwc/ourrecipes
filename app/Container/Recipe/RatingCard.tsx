import React from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import {Theme, Typography} from '../../assets/styles';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import {StackedBarChart, ChartConfig} from 'react-native-chart-kit';
export interface RatingCardProps {
  review: string;
  rating: number;
  reviewTime: Date;
  reviewAuthor: string;
}

const RatingCard = () => {
  return (
    <View style={ratingCardStyle.container}>
      {/* Out of 5 star */}
      <View style={ratingCardStyle.ratingCountWrapper}>
        <Text style={Typography.Typography.header}>4.5</Text>
        <Text>Out of 5</Text>
      </View>
      {/* Star ratings */}
      <View style={{flex: 3}}>
        <View style={ratingCardStyle.ratingRow}>
          <View style={ratingCardStyle.ratingStar}>
            <Text>5 star</Text>
          </View>
          <View style={ratingCardStyle.ratingBarWrapper}>
            <View style={ratingCardStyle.ratingBarBack} />
            <View style={ratingCardStyle.ratingBarFront} />
          </View>
          <View style={ratingCardStyle.ratingCount}>
            <Text>(30)</Text>
          </View>
        </View>
        <View style={ratingCardStyle.ratingRow}>
          <View style={ratingCardStyle.ratingStar}>
            <Text>4 star</Text>
          </View>
          <View style={ratingCardStyle.ratingBarWrapper}>
            <View style={ratingCardStyle.ratingBarBack} />
            <View style={ratingCardStyle.ratingBarFront} />
          </View>
          <View style={ratingCardStyle.ratingCount}>
            <Text>(30)</Text>
          </View>
        </View>
        <View style={ratingCardStyle.ratingRow}>
          <View style={ratingCardStyle.ratingStar}>
            <Text>3 star</Text>
          </View>
          <View style={ratingCardStyle.ratingBarWrapper}>
            <View style={ratingCardStyle.ratingBarBack} />
            <View style={ratingCardStyle.ratingBarFront} />
          </View>
          <View style={ratingCardStyle.ratingCount}>
            <Text>(30)</Text>
          </View>
        </View>
        <View style={ratingCardStyle.ratingRow}>
          <View style={ratingCardStyle.ratingStar}>
            <Text>2 star</Text>
          </View>
          <View style={ratingCardStyle.ratingBarWrapper}>
            <View style={ratingCardStyle.ratingBarBack} />
            <View style={ratingCardStyle.ratingBarFront} />
          </View>
          <View style={ratingCardStyle.ratingCount}>
            <Text>(30)</Text>
          </View>
        </View>
        <View style={ratingCardStyle.ratingRow}>
          <View style={ratingCardStyle.ratingStar}>
            <Text>1 star</Text>
          </View>
          <View style={ratingCardStyle.ratingBarWrapper}>
            <View style={ratingCardStyle.ratingBarBack} />
            <View style={ratingCardStyle.ratingBarFront} />
          </View>
          <View style={ratingCardStyle.ratingCount}>
            <Text>(30)</Text>
          </View>
        </View>
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
    margin: 10,
    borderRadius: 5,
    padding: 15,
    backgroundColor: Theme.Light.shadow,
    borderBottomWidth: 0.3,
    borderBottomColor: Theme.Light.body,
  },

  ratingCountWrapper: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
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
    width: 100,
    backgroundColor: Theme.Light.caption,
    height: 8,
    borderRadius: 10,
    position: 'absolute',
  },
  ratingBarBack: {
    flex: 1,
    backgroundColor: Theme.Light.body,
    opacity: 0.4,
    height: 8,
    borderRadius: 10,
  },
});

export default RatingCard;
