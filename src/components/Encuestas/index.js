import React from 'react';
import {View, Text, Platform} from 'react-native';
import {Radio, CheckBox} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {styleEncuesta} from '../../styles/EncuestaComponent';
import {PLENARIA} from '../../helper/textos';

function Encuesta(Props) {
  const {data} = Props;

  return (
    <View key={data.key}>
      <View style={styleEncuesta.baseQuestion}>
        <FontAwesome name="square" style={styleEncuesta.styleIcon} />
        <Text style={styleEncuesta.textQuestion}>{data.text}</Text>
      </View>
      <View style={styleEncuesta.containerRadio}>
        <View style={styleEncuesta.boxElemnts}>
          <View style={{marginLeft: -10}}>
            {Platform.OS === 'android' ? (
              <Radio selected={false} />
            ) : (
              <CheckBox checked={true} />
            )}
          </View>
          <View style={{marginLeft: 10}}>
            <Text>SI</Text>
          </View>
        </View>
        <View style={styleEncuesta.boxElemnts}>
          <View style={{marginLeft: -3}}>
            {Platform.OS === 'android' ? (
              <Radio selected={false} />
            ) : (
              <CheckBox checked={true} />
            )}
          </View>
          <View style={{marginLeft: 10}}>
            <Text>NO</Text>
          </View>
        </View>
      </View>
      <View style={styleEncuesta.textAddComment}>
        <Text style={{color: '#fbe000'}}>{PLENARIA.TEX_ADD_COMMENT}</Text>
      </View>
    </View>
  );
}

export default Encuesta;
