import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Theme, Typography} from '../../assets/styles';
import {StackedBarChart} from 'react-native-svg-charts';

export interface RatingCardProps {
  review: string;
  rating: number;
  reviewTime: Date;
  reviewAuthor: string;
}

const contentInset = {top: 40, bottom: 40};

const data = [
  {
    rating: 5,
    reviews: 34,
  },
  {
    rating: 4,
    reviews: 4,
  },
  {
    rating: 3,
    reviews: 3,
  },
  {
    rating: 2,
    reviews: 1,
  },
  {
    rating: 1,
    reviews: 14,
    label: 'test',
  },
];

const RatingCard = () => {
  return (
    <View
      style={{
        height: 200,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text style={Typography.Typography.header}>4.5</Text>
        <Text style={Typography.Typography.header}>Out of 5</Text>

      </View>
      <StackedBarChart
        style={{height: 200, width: 200, flex: 2, paddingHorizontal: 20}}
        colors={[Theme.Light.caption]}
        horizontal={true}
        keys={['reviews']}
        data={data}
        showGrid={false}
        contentInset={contentInset}
      />
    </View>
  );
};

const ratingCardStyle = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10,
    borderRadius: 5,
    padding: 15,
    backgroundColor: Theme.Light.shadow,
    borderBottomWidth: 0.3,
    borderBottomColor: Theme.Light.body,
  },
});

export default RatingCard;
