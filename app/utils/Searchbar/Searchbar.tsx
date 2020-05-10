import Voice from '@react-native-community/voice';
import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Theme} from '../../assets/styles';
var parser = require('ingredients-parser');

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const [isRecording, setIsRecording] = useState(false);

  Voice.onSpeechStart = () => setIsRecording(true);
  Voice.onSpeechEnd = () => setIsRecording(false);
  Voice.onSpeechResults = () => setIsRecording(false);
  Voice.onSpeechError = () => setIsRecording(false);

  Voice.onSpeechPartialResults = (res: any) => {
    if (res.value[0]) setSearch(res.value[0]);
    console.log(res);
  };

  Voice.onSpeechResults = (res: any) => {
    if (res.value[0]) setSearch(res.value[0]);
  };

  //Make microphone red if recording
  const microphoneColor = isRecording ? 'red' : 'black';

  //Show clear button if there is text

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
        <Icon
          name={'microphone'}
          size={16}
          color={microphoneColor}
          style={{marginHorizontal: 10}}
          onPress={() => Voice.start('en-US')}
        />
        <Icon
          name={'search'}
          size={14}
          style={{marginRight: 10}}
          onPress={() => console.log(parser.parse(search))}
        />
        <TextInput
          placeholder={'Search for a recipe'}
          value={search}
          onChangeText={(text: string) => setSearch(text)}
          style={searchBarStyle.textInput}
          onSubmitEditing={() => console.log('submitted: ', search)}
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
