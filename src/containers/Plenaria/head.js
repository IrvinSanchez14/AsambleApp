import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import * as Progress from 'react-native-progress';

import {PLENARIA} from '../../helper/textos';
import {stylePlenaria} from '../../styles/PlenariaStyle';

function HeadPlenaria(Props) {
  const [timeLeft, setTimeLeft] = useState(null);

  React.useEffect(() => {
    if (timeLeft === 0) {
      console.log('TIME LEFT IS 0');
      setTimeLeft(null);
    }
    if (!timeLeft) return;

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  useEffect(() => {
    const unsubscribe = Props.navigation.addListener('focus', () => {
      setTimeLeft(1800);
    });

    return unsubscribe;
  }, []);

  return (
    <View>
      <SafeAreaView style={stylePlenaria.headBase}>
        <View>
          <Text>{PLENARIA.HEAD_PLENARIA_TIMER}</Text>
        </View>
        <View>
          <Progress.Bar
            progress={0.2}
            width={200}
            color="#fbe000"
            height={20}
          />
        </View>
        <View>
          <Text>{`${Math.floor(timeLeft / 60)}:${
            Math.floor(timeLeft / 60) < 10 ? `0${timeLeft % 60}` : timeLeft % 60
          }`}</Text>
        </View>
      </SafeAreaView>
      <View style={stylePlenaria.headTitle}>
        <Text style={stylePlenaria.titleHead}>ASAMBLEA #47</Text>
      </View>
    </View>
  );
}

export default HeadPlenaria;
