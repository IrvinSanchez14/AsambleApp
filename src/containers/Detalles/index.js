import * as React from 'react';
import {View, Text, Button} from 'react-native';

function DetalleScreen(Props) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Detalle</Text>
      <Button title="Go back" onPress={() => Props.navigation.goBack()} />
    </View>
  );
}

export default DetalleScreen;
