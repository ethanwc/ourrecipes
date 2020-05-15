import React from 'react'
import { View } from 'react-native';
import VoiceWrapper from '../../../utils/VoiceWrapper/VoiceWrapper';

const CreateIngredients = () => {
    return (
        <View>
            {/* <CreateIngredientCard amount={1} unit={'cup'} ingredient={'flour'}/> */}

            <VoiceWrapper size={26} onVoiceCompleteResult={(text: string) => console.log(text)} onVoicePartialResult={(text: string) => console.log(text)} />
        </View>
    )
}


export default CreateIngredients;