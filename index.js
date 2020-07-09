/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {withAuthenticator} from 'aws-amplify-react-native';
import Amplify from 'aws-amplify';

const awsConfig = {
  identityPoolId: 'us-west-2:fd59ad3e-1f97-47df-a6b9-0c4c26af498f',
  region: 'us-west-2',
  userPoolId: 'us-west-2_hZYGwuQqX',
  userPoolWebClientId: '34feialh5mvr5tnb15v26vt3l0',
};

const signUpConfig = {
  header: 'My Customized Sign Up',
  hideAllDefaults: true,
  defaultCountryCode: '1',
  signUpFields: [
    {
      label: 'Name',
      key: 'name',
      required: true,
      displayOrder: 1,
      type: 'string',
    },
    {
      label: 'Email',
      key: 'email',
      required: true,
      displayOrder: 2,
      type: 'string',
    },
    {
      label: 'Password',
      key: 'password',
      required: true,
      displayOrder: 3,
      type: 'password',
    },
    // and other custom attributes
  ],
};

Amplify.configure(awsConfig);

AppRegistry.registerComponent(appName, () =>
  withAuthenticator(App, {
    signUpConfig: {
    //   hiddenDefaults: ['phone_number'],
      signUpFields: [
        {label: 'Name', key: 'name', required: true, type: 'string'},
      ],
    },
  }),
);
