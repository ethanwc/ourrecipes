import React from 'react';
import {View} from 'react-native';
import CreateDirectionCard from '../../../Container/Create/CreateDirectionCard';
import CreateNewCard from '../../../Container/Create/CreateNewCard';

const CreateDirections = () => {
  return (
    <View>
      <CreateDirectionCard order={1}/>
      <CreateDirectionCard order={2}/>
      <CreateDirectionCard order={3}/>
      <CreateDirectionCard order={4}/>
      <CreateDirectionCard order={5}/>
      <CreateNewCard onPress={() => console.log('add new card')} />
    </View>
  );
};

export default CreateDirections;
