import React, {useEffect, useState} from 'react';
import {set} from './redux/user/actions';
import {useDispatch} from 'react-redux';
import {Navigator} from './navigation/Navigator';
import {awsconfig} from './assets/constants/awsconfig';
import Amplify, {Auth, Hub} from 'aws-amplify';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import {Button, View} from 'react-native';
import {getGroups} from './redux/group/actions';

console.disableYellowBox = true;

async function urlOpener(url: any, redirectUrl: any) {
  console.log(url);
  await InAppBrowser.isAvailable();
  await InAppBrowser.openAuth(url, redirectUrl, {
    showTitle: false,
    enableUrlBarHiding: true,
    enableDefaultShare: false,
    ephemeralWebSession: false,
  });

  // Is this needed?
  // const {type, url: newUrl} =
  // if (type === 'success') {
  //   Linking.openURL(newUrl);
  // }
}

// Configure aws auth
Amplify.configure({
  ...awsconfig,
  oauth: {
    ...awsconfig.oauth,
    urlOpener,
  },
});

// App root
export default function App() {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);

  const getUser = () => {
    return Auth.currentAuthenticatedUser()
      .then((userData) => userData)
      .catch(() => console.log('Not signed in'));
  };

  useEffect(() => {
    Hub.listen('auth', ({payload: {event, data}}) => {
      switch (event) {
        case 'signIn':
        case 'cognitoHostedUI':
          getUser().then((userData: any) => setUser(userData));
          console.log('thing');
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

  // Set user state upon auth
  // if (user) console.log(user);
  if (user) dispatch(set(user.attributes));

  const root = user ? (
    <Navigator />
  ) : (
    <View>
      <Button title={'sign in'} onPress={() => Auth.federatedSignIn()} />
    </View>
  );

  return root;
}

//TODO: have a greeting page that explains the app then asks for login.
