import * as React from 'react';
import {StyleSheet, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import HomeScreen from '../containers/Home';
import DetalleScreen from '../containers/Detalles';

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  tabBarLabel: {
    fontSize: 12,
  },
  tabBarIcon: {
    color: '#fbe000',
  },
});

function RootStack() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#fbe000',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Historial',
          tabBarIcon: ({color, size}) => (
            <FontAwesome color={color} name="history" size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={DetalleScreen}
        options={{
          tabBarLabel: 'Enviar',
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="paper-plane" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Ajustes"
        component={DetalleScreen}
        options={{
          tabBarLabel: 'Ajustes',
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="cog" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default RootStack;
