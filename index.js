import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './src/App';
import {Provider} from 'react-redux';
import {store} from './src/redux';

const ReduxWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => ReduxWrapper);
