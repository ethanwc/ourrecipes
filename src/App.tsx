import React, {useEffect, useState} from 'react';
import {Button, View} from 'react-native';
import Amplify, {Auth, Hub} from 'aws-amplify';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import {awsconfig} from './assets/constants/awsconfig';
import {setSession, setUser as SetUserData} from './redux/user/actions';
import {useDispatch} from 'react-redux';
import {Navigator} from './navigation/Navigator';

console.disableYellowBox = true;

async function urlOpener(url: any, redirectUrl: any) {
  console.log(url);
  await InAppBrowser.isAvailable();
  // const {type, url: newUrl} =
  await InAppBrowser.openAuth(url, redirectUrl, {
    showTitle: false,
    enableUrlBarHiding: true,
    enableDefaultShare: false,
    ephemeralWebSession: false,
  });

  // // Is this needed?
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
  if (user)
    dispatch(setSession({...user.attributes, ...{username: user.username}}));

  if (user) console.log({...user.attributes, ...{username: user.username}});

  // if (user) console.log(user.signInUserSession.accessToken.jwtToken);
  // if (user) console.log(user.signInUserSession.idToken.jwtToken);
  // if (user) console.log(user.signInUserSession);
  // if (user) console.log(user.signInUserSession);
  // if (user) console.log(user.signInUserSession.idToken.jwtToken);

  const root = user ? (
    <Navigator />
  ) : (
    <View>
      <Button title={'Sign in'} onPress={() => Auth.federatedSignIn()} />
    </View>
  );

  return root;
}

//TODO: have a greeting page that explains the app then asks for login.
