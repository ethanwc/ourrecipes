import React from 'react';
import {Text, Button, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {increase as increment} from './redux/actions/counter';
import {decrease as decrement} from './redux/actions/counter';


const Card = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: any) => state.counter.count);

  return (
    <View>
      <Text>{count}</Text>
      <Button onPress={() => dispatch(increment())} title={'increase'} />
      <Button onPress={() => dispatch(decrement())} title={'decrease'} />
    </View>
  );
};

export default Card;
