import React from 'react';
import {View} from 'react-native';

import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-community/google-signin';

import { LoginButton, AccessToken } from 'react-native-fbsdk';


const _signIn = () => {
  console.log('sign in pressed');
};

export const Login = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <GoogleSigninButton
        style={{width: 192, height: 48}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Light}
        onPress={() => _signIn()}
        disabled={false}
      />
      <LoginButton
          onLoginFinished={
            (error, result) => {
              if (error) {
                console.log("login has error: " + result.error);
              } else if (result.isCancelled) {
                console.log("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data: any) => {
                    console.log(data.accessToken.toString())
                  }
                )
              }
            }
          }
          onLogoutFinished={() => console.log("logout.")}/>
    </View>
  );
};
