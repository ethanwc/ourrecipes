export const awsconfig = {
  identityPoolId: 'us-west-2:0141a225-6e64-49ae-b7f7-1adb6e0124ee',
  region: 'us-west-2',
  userPoolId: 'us-west-2_JIyd7gfYd',
  userPoolWebClientId: '76pmarb1rb17n3tctrdmsqv60e',
  oauth: {
    domain: 'ourrecipes.auth.us-west-2.amazoncognito.com',
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
