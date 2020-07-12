import React, {useEffect, useState} from 'react';
import {name as appName} from './app.json';
import {Button, Linking, Text, View} from 'react-native';
import Amplify, {Auth, Hub} from 'aws-amplify';
import InAppBrowser from 'react-native-inappbrowser-reborn';

async function urlOpener(url, redirectUrl) {
  console.log(url);
  await InAppBrowser.isAvailable();
  const {type, url: newUrl} = await InAppBrowser.openAuth(url, redirectUrl, {
    showTitle: false,
    enableUrlBarHiding: true,
    enableDefaultShare: false,
    ephemeralWebSession: false,
  });
  if (type === 'success') {
    Linking.openURL(newUrl);
  }
  // if (type === 'success') {
  // Linking.openURL();
  // }
}
/*
https://ourrecipesapp.auth.us-west-2.amazoncognito.com/login?
response_type=code
&client_id=1q564cnieahdmg9smqf4n3tnor
&redirect_uri=https://www.example.com
&identity_provider=Facebook */

const awsconfig = {
  identityPoolId: 'us-west-2:0141a225-6e64-49ae-b7f7-1adb6e0124ee',
  region: 'us-west-2',
  userPoolId: 'us-west-2_JIyd7gfYd',
  userPoolWebClientId: '76pmarb1rb17n3tctrdmsqv60e',
  oauth: {
    domain: 'dawadwwadwadwadwad.auth.us-west-2.amazoncognito.com',
    scope: [
      'email',
      'openid',
      'profile',
      'profile',
      'aws.cognito.signin.user.admin',
    ],
    redirectSignIn: 'ourrecipes://',
    redirectSignOut: 'ourrecipes://',
    responseType: 'token',
  },
  federationTarget: 'COGNITO_USER_POOLS',
};

Amplify.configure({
  ...awsconfig,
  oauth: {
    ...awsconfig.oauth,
    urlOpener,
  },
});

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    Hub.listen('auth', ({payload: {event, data}}) => {
      switch (event) {
        case 'signIn':
        case 'cognitoHostedUI':
          getUser().then((userData) => setUser(userData));
          break;
        case 'signOut':
          setUser(null);
          break;
        case 'signIn_failure':
        case 'cognitoHostedUI_failure':
          console.log('Sign in failure', data);
          break;
      }
    });

    getUser().then((userData) => setUser(userData));
  }, []);

  function getUser() {
    return Auth.currentAuthenticatedUser()
      .then((userData) => userData)
      .catch(() => console.log('Not signed in'));
  }

  return (
    <View>
      <Text>User: {user ? JSON.stringify(user.attributes) : 'None'}</Text>
      {user ? (
        <Button title="Sign Out" onPress={() => Auth.signOut()} />
      ) : (
        <View>
          <Button
            title="Google Sign In"
            onPress={() => Auth.federatedSignIn({provider: 'Google'})}
          />
          <Button
            title="Facebook Sign In"
            onPress={() => Auth.federatedSignIn()}
          />
        </View>
      )}
    </View>
  );
}

AppRegistry.registerComponent(appName, () => App);

// import React from 'react';
import {AppRegistry} from 'react-native';
// import App from './src/App';
// import {
//   withAuthenticator
// } from 'aws-amplify-react-native';
// import Amplify from '@aws-amplify/core';

// import {
//   Provider
// } from 'react-redux';

// import {
//   store
// } from './src/redux';

// const awsConfig = {
//   identityPoolId: 'us-west-2:fd59ad3e-1f97-47df-a6b9-0c4c26af498f',
//   region: 'us-west-2',
//   userPoolId: 'us-west-2_hZYGwuQqX',
//   userPoolWebClientId: '34feialh5mvr5tnb15v26vt3l0',
// };

// Amplify.configure(awsConfig, {
//   Analytics: {
//     disabled: true,
//   },
// });

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

// AppRegistry.registerComponent(appName, () =>
//   withAuthenticator(AppWrapper, {
//     signUpConfig: {
//       //   hiddenDefaults: ['phone_number'],
//       signUpFields: [{
//         label: 'Name',
//         key: 'name',
//         required: true,
//         type: 'string'
//       }, ],
//     },
//   }),
// );
