import Voice from '@react-native-community/voice';
import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors } from '../../styles';

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
  const microphoneColor = isRecording
    ? 'red'
    : Colors.lightTheme.backgroundPrimary;

  //Show clear button if there is text

  const clearButton = search ? (
    <Icon
      name={'times'}
      size={16}
      color={Colors.lightTheme.backgroundPrimary}
      style={{marginHorizontal: 10}}
      onPress={() => setSearch('')}
    />
  ) : null;

  return (
    <View>
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
            color={Colors.lightTheme.backgroundPrimary}
            style={{marginRight: 10}}
            onPress={() => console.log('submitted: ', search)}
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
    </View>
  );
};

const searchBarStyle = StyleSheet.create({
  container: {
    backgroundColor: Colors.lightTheme.textPrimary,
    opacity: 0.7,
    padding: 8,
  },
  innerContainer: {
    backgroundColor: Colors.lightTheme.textSecondary,
    opacity: 0.8,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 2,
    margin: 0,
  },
  textInput: {
    color: Colors.lightTheme.backgroundPrimary,
    flex: 1,
  },
});

export default SearchBar;
