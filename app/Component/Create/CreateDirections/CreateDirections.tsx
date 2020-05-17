import React from 'react';
import {View} from 'react-native';
import CreateDirectionCard from '../../../Container/Create/CreateDirectionCard';
import CreateNewCard from '../../../Container/Create/CreateNewCard';

const CreateDirections = () => {
  return (
    <View>
      <CreateDirectionCard />
      <CreateDirectionCard />
      <CreateDirectionCard />
      <CreateDirectionCard />
      <CreateDirectionCard />
      <CreateNewCard onPress={() => console.log('add new card')} />
    </View>
  );
};

export default CreateDirections;
