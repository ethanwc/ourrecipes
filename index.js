import React from 'react';
import {
  AppRegistry
} from 'react-native';
import App from './src/App';
import {
  name as appName
} from './app.json';
import {
  withAuthenticator
} from 'aws-amplify-react-native';
import Amplify from '@aws-amplify/core';

import {
  Provider
} from 'react-redux';


import {
  store
} from './src/redux';


const awsConfig = {
  identityPoolId: 'us-west-2:fd59ad3e-1f97-47df-a6b9-0c4c26af498f',
  region: 'us-west-2',
  userPoolId: 'us-west-2_hZYGwuQqX',
  userPoolWebClientId: '34feialh5mvr5tnb15v26vt3l0',
};

Amplify.configure(awsConfig, {
  Analytics: {
    disabled: true,
  },
});

const AppWrapper = () => {
  return ( <Provider store = {store}>
    <App/>
    </Provider>
  )
}

AppRegistry.registerComponent(appName, () =>
  withAuthenticator(AppWrapper, {
    signUpConfig: {
      //   hiddenDefaults: ['phone_number'],
      signUpFields: [{
        label: 'Name',
        key: 'name',
        required: true,
        type: 'string'
      }, ],
    },
  }),
);