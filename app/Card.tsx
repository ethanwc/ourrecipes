import React from 'react';
import {Text, Button, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {INCREASE_VOTE as increaseVote} from './redux/actions/actions';
import {INCREMENT as increment} from './redux/actions/actions';

const Card = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: any) => state.counter.count);

  return (
    <View>
      <Text>{count}</Text>
      <Button onPress={() => dispatch(increaseVote())} title={'increase'} />
    </View>
  );
};

export default Card;
