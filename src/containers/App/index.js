import React, {useEffect} from 'react';
import {Button, Text} from 'react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {PersistGate} from 'redux-persist/integration/react';
import {createStackNavigator} from '@react-navigation/stack';

import {store, persistor} from '../../store';

import DetalleScreen from '../Detalles';
import HomeScreen from '../Home';
import PlenariaContainer from '../Plenaria';
import PlenariaPasadaContainer from '../PlenariasPasadas';
import DetalleAsambleaContainer from '../DetalleAsamblea';

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

const RootComponent = () => {
  useEffect(() => {}, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Root">
            <Stack.Screen
              name="Root"
              component={HomeScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen name="Detalles" component={DetalleScreen} />
            <Stack.Screen
              name="Ajustes"
              component={PlenariaContainer}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="plenarias_pasadas"
              component={PlenariaPasadaContainer}
              options={{
                title: 'PLENARIAS PASADAS',
                headerStyle: {
                  backgroundColor: '#fbe000',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontSize: 14,
                  color: '#000',
                },
                titleStyle: {color: 'white'},
              }}
            />
            <Stack.Screen
              name="detalle_asamblea"
              component={DetalleAsambleaContainer}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};
export default RootComponent;
