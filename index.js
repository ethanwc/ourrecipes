import React, {useEffect, useState} from 'react';
import {name as appName} from './app.json';
import {Button, Linking, Text, View} from 'react-native';
import Amplify, {Auth, Hub} from 'aws-amplify';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import {AppRegistry} from 'react-native';
import CoreApp from './src/App';

import {
  Provider
} from 'react-redux';
import {
  store
} from './src/redux';


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
}

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
          console.log('thing')
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

  const root = user ? <CoreAppState/> : <View><Button
    style={{ width: 192, height: 48 }} title={'sign in'}
    onPress={() => Auth.federatedSignIn()}
    />
    </View>
    ;

    if (user) console.log(JSON.stringify(user.attributes.name))

  return (
    <Provider store={store}>
      {root}
    </Provider>

  );
}

AppRegistry.registerComponent(appName, () => App);


const CoreAppState = () => {
  return (
      <CoreApp />
  );
};

//todo: wrap entire app in provider, use redux to handle user logged state, create: awsconfig - fix domains, login nav flow, fix 'corestate' 