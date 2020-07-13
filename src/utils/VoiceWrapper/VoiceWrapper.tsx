import React, { useState } from 'react'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';
import Voice from '@react-native-community/voice';
import { useFocusEffect } from '@react-navigation/native';

export interface voiceWrapperInterface {
    onVoicePartialResult: Function;
    onVoiceCompleteResult: Function;
    size: number;
}

const VoiceWrapper = (props: voiceWrapperInterface) => {

    const [isRecording, setIsRecording] = useState(false);

    useFocusEffect(
        React.useCallback(() => {
            initalizeVoice()

            return () => {
                Voice.destroy().then(Voice.removeAllListeners);
                setIsRecording(false)
            };
        }, []));

    const initalizeVoice = () => {
        Voice.onSpeechStart = () => setIsRecording(true);
        Voice.onSpeechEnd = () => setIsRecording(false);
        Voice.onSpeechResults = () => setIsRecording(false);
        Voice.onSpeechError = () => setIsRecording(false);

        Voice.onSpeechPartialResults = (res: any) => {
            if (res.value[0]) props.onVoicePartialResult(res.value[0])
        };

        Voice.onSpeechResults = (res: any) => {
            if (res.value[0]) props.onVoiceCompleteResult(res.value[0])
        };
    }

    //Make microphone red if recording
    const microphoneColor = isRecording ? 'red' : 'black';

    return (
        <View>
            <Icon
                name={'mic'}
                size={props.size}
                color={microphoneColor}
                onPress={() => Voice.start('en-US')}
                style={{marginRight: 5}}
            />
        </View>
    )
}

export default VoiceWrapper;