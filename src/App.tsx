import React, {useEffect} from 'react';
import {set} from './redux/user/actions';
import {User} from './redux/user/types';
import {useDispatch} from 'react-redux';
import {Navigator} from './navigation/Navigator';

console.disableYellowBox = true;

/**
 * Container base navigation, app main
 */
export default function CoreApp() {
  // useEffect(() => {
  //   // Create an scoped async function in the hook
  //   async function anyNameFunction() {
  //     const awsPayload = await (await Auth.currentSession()).getIdToken()
  //       .payload;
  //     const payload: User = {
  //       email: awsPayload.email,
  //       name: awsPayload.name,
  //       phoneNumber: 'asdf',
  //     };
  //     dispatch(set(payload));
  //   }
  //   // Execute the created function directly
  //   // anyNameFunction();
  //   console.log('wtf');
  // }, []);

  return <Navigator />;
}
