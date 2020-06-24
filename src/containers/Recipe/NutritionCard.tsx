import React from 'react';
import {View, Text} from 'react-native';
import {Theme, Typography} from '../../assets/styles';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

export interface nutritionCardProps {
  fat: number;
  protein: number;
  sugar: number;
}
//todo: ask users about their weight/height to determine recommended nutrient intake
const NutritionCard = (props: nutritionCardProps) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Theme.Light.background,
        padding: 15,
        borderRadius: 15,
        marginVertical: 5,
      }}>
      <AnimatedCircularProgress
        size={100}
        width={7}
        rotation={0}
        fill={props.fat}
        backgroundWidth={5}
        tintColor={Theme.Light.caption}
        backgroundColor={Theme.Light.body}>
        {() => (
          <View style={{alignItems: 'center'}}>
            <Text style={Typography.Typography.subheader}>{props.fat}g</Text>
            <Text style={Typography.Typography.body}>fat</Text>
          </View>
        )}
      </AnimatedCircularProgress>
      <AnimatedCircularProgress
        size={100}
        width={7}
        rotation={0}
        fill={props.sugar}
        backgroundWidth={5}
        tintColor={Theme.Light.caption}
        backgroundColor={Theme.Light.body}>
        {() => (
          <View style={{alignItems: 'center'}}>
            <Text style={Typography.Typography.subheader}>{props.sugar}g</Text>
            <Text style={Typography.Typography.body}>sugar</Text>
          </View>
        )}
      </AnimatedCircularProgress>
      <AnimatedCircularProgress
        size={100}
        width={7}
        rotation={0}
        fill={props.protein}
        backgroundWidth={5}
        tintColor={Theme.Light.caption}
        backgroundColor={Theme.Light.body}>
        {() => (
          <View style={{alignItems: 'center'}}>
            <Text style={Typography.Typography.subheader}>
              {props.protein}g
            </Text>
            <Text style={Typography.Typography.body}>protein</Text>
          </View>
        )}
      </AnimatedCircularProgress>
    </View>
  );
};

export default NutritionCard;
