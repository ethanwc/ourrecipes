import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {AirbnbRating, Button, Input} from 'react-native-elements';
import {Typography, Theme} from '../../assets/styles';

const CreateReview = () => {
  return (
    <View style={createReviewStyle.container}>
      <Text style={createReviewStyle.text}>
        Let other users know what you think of this recipe!
      </Text>
      <AirbnbRating size={24} showRating={false} defaultRating={3} />
      <Input
        multiline={true}
        numberOfLines={5}
        style={createReviewStyle.input}
        containerStyle={{backgroundColor: Theme.Light.shadow, borderBottomColor: 'red'}}
        inputContainerStyle={{borderBottomColor: Theme.Light.shadow}}
        textAlignVertical={'top'}
      />

      {/* Submit Review Button */}
      <Button
        title="Submit"
        type="outline"
        onPress={() => console.log('submit review')}
        titleStyle={{color: Theme.Light.caption}}
        buttonStyle={{borderColor: Theme.Light.caption}}
        containerStyle={createReviewStyle.button}
      />
    </View>
  );
};

const createReviewStyle = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    color: Theme.Light.body,
  },
  text: {
    ...Typography.Typography.subheader,
    color: Theme.Light.headline,
    marginVertical: 10,
  },
  button: {
    marginVertical: 15,
    borderWidth: 1,
    borderColor: Theme.Light.caption,
  },
});

export default CreateReview;
