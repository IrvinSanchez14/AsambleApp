import React, {useEffect} from 'react';

import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {PersistGate} from 'redux-persist/integration/react';

import {store, persistor} from '../../store';
import RouteApp from '../Routes';

const RootComponent = () => {
  useEffect(() => {}, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <RouteApp />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};
export default RootComponent;
