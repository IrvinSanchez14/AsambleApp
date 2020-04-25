import React, {Fragment} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

import DetalleScreen from '../Detalles';
import HomeScreen from '../Home';
import PlenariaContainer from '../Plenaria';
import PlenariaPasadaContainer from '../PlenariasPasadas';
import DetalleAsambleaContainer from '../DetalleAsamblea';
import Login from '../Login';
import {connect} from 'react-redux';

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

function RouteApp(Props) {
  const {login} = Props;

  return (
    <Stack.Navigator initialRouteName="Home">
      {login ? (
        <Fragment>
          <Stack.Screen
            name="Home"
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
        </Fragment>
      ) : (
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
      )}
    </Stack.Navigator>
  );
}

function mapStateToProps(state) {
  const {login} = state.Acceso;
  return {
    login,
  };
}

export default connect(mapStateToProps, null)(RouteApp);
