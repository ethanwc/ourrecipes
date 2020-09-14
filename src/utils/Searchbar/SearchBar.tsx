import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Theme} from '../../assets/styles';
import VoiceWrapper from '../VoiceWrapper/VoiceWrapper';

export interface SearchBarProps {
  onSearchSubmit: Function;
}
const SearchBar = (props: SearchBarProps) => {
  const [search, setSearch] = useState('');

  // Show clear button if there is text
  const clearButton = search ? (
    <Icon
      name={'times'}
      size={16}
      style={{marginHorizontal: 10}}
      onPress={() => setSearch('')}
    />
  ) : null;

  return (
    <View style={searchBarStyle.container}>
      <View style={searchBarStyle.innerContainer}>
        <VoiceWrapper
          size={16}
          onVoicePartialResult={(text: string) => setSearch(text)}
          onVoiceCompleteResult={(text: string) => setSearch(text)}
        />
        <Icon
          name={'search'}
          size={14}
          style={{marginRight: 10}}
          onPress={() => props.onSearchSubmit(search)}
        />
        <TextInput
          placeholder={'Search for a recipe'}
          value={search}
          onChangeText={(text: string) => setSearch(text)}
          style={searchBarStyle.textInput}
          onSubmitEditing={() => props.onSearchSubmit(search)}
        />
        {clearButton}
      </View>
    </View>
  );
};

const searchBarStyle = StyleSheet.create({
  container: {
    opacity: 0.7,
    padding: 8,
    backgroundColor: Theme.Light.shadow,
    borderRadius: 15,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  innerContainer: {
    opacity: 0.8,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 2,
    margin: 0,
  },
  textInput: {
    flex: 1,
  },
});

export default SearchBar;
