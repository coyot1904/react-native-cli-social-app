import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

import {store} from './src/Redux/store';

import MainStack from './src/Screens';

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  </Provider>
);

export default App;
