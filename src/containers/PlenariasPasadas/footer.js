import React from 'react';
import {View, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function FooterPlenariaPasada() {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2,
        fontSize: 10,
        flexDirection: 'row',
      }}>
      <Text style={{fontSize: 12, fontWeight: 'bold'}}>1045</Text>
      <FontAwesome
        name="group"
        style={{fontSize: 22, color: '#fbe000', marginLeft: 5}}
      />
    </View>
  );
}

export default FooterPlenariaPasada;
