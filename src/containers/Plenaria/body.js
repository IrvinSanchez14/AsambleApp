import React from 'react';
import {View, ScrollView} from 'react-native';

import Encuesta from '../../components/Encuestas';
import {stylePlenaria} from '../../styles/PlenariaStyle';

const mockData = [
  {
    key: 1,
    text:
      'CONSIDERA QUE UD ES, CONSIDERA QUE UD ES, SIENDO QUE LO QUE SEA, PUEDE DECIR, LO QUE SEA, ENTONCES SI?',
  },
  {
    key: 2,
    text: 'UD ES MARICON?',
  },
  {
    key: 3,
    text:
      'CONSIDERA QUE UD ES, CONSIDERA QUE UD ES, SIENDO QUE LO QUE SEA, PUEDE DECIR, LO QUE SEA, ENTONCES SI?',
  },
  {
    key: 4,
    text:
      'CONSIDERA QUE UD ES, CONSIDERA QUE UD ES, SIENDO QUE LO QUE SEA, PUEDE DECIR, LO QUE SEA, ENTONCES SI?',
  },
];

function BodyPlenaeria() {
  return (
    <ScrollView>
      <View style={stylePlenaria.bodyBase}>
        {mockData.map((data) => {
          return <Encuesta data={data} key={data.key} />;
        })}
      </View>
    </ScrollView>
  );
}

export default BodyPlenaeria;
