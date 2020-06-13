import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Theme } from '../../assets/styles';
import VoiceWrapper from '../VoiceWrapper/VoiceWrapper';
import Autocomplete from 'react-native-autocomplete-input';

const SearchBar = () => {
  const [search, setSearch] = useState('');

  //Show clear button if there is text
  const clearButton = search ? (
    <Icon
      name={'times'}
      size={16}
      style={{ marginHorizontal: 10 }}
      onPress={() => setSearch('')}
    />
  ) : null;

  return (
    <View style={searchBarStyle.container}>
      <View style={searchBarStyle.innerContainer}>
        <Icon
          name={'search'}
          size={14}
          style={{ marginRight: 10 }}
        />
        <VoiceWrapper size={16} onVoicePartialResult={(text: string) => setSearch(text)} onVoiceCompleteResult={(text: string) => setSearch(text)} />
        <View>
          <View style={searchBarStyle.asdf}>
            <Autocomplete
              data={['asdf', "a", "ab", "ac"]}
              defaultValue={""}
              onChangeText={(text: string) => console.log({ query: text })}
              renderItem={() => (
                <View style={{width: 100, height: 50, backgroundColor: 'red'}}>
                  <Text>asf</Text>
                  </View>
              )}
            />
            <View>
              <Text>Some content</Text>
            </View>
          </View>
        </View>
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
  suggestContainer: {
    opacity: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 2,
    margin: 0,
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 100,
  },
  textInput: {
    flex: 1,
  },
  asdf: {
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1
  }
});

export default SearchBar;
