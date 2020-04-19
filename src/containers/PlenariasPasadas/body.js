import React from 'react';
import {View, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function BodyPlenariaPasada(Props) {
  const {data} = Props;

  return (
    <View>
      {data.objectText.map((item, index) => {
        return (
          <View
            key={index}
            style={{
              flex: 1,
              flexDirection: 'row',
              padding: 10,
            }}>
            <FontAwesome
              name="square"
              style={{fontSize: 10, color: '#fbe000'}}
            />
            <Text
              style={{flex: 1, paddingLeft: 5, fontSize: 10, marginTop: -2}}>
              {item.question}
            </Text>
          </View>
        );
      })}
    </View>
  );
}

export default BodyPlenariaPasada;
