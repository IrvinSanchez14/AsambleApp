import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {Icon} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {PieChart} from 'react-native-svg-charts';

const styleEncuesta = StyleSheet.create({
  baseQuestion: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
  },
  styleIcon: {
    fontSize: 24,
    color: '#fbe000',
  },
  textQuestion: {
    flex: 1,
    paddingLeft: 5,
  },
});

function BodyDetallePlenaria() {
  const [labelWidth, setLabelWidth] = useState(0);
  const data = [
    {
      dato: 50,
      fill: '#fbe000',
    },
    {
      dato: 10,
      fill: '#e2e2e2',
    },
  ];

  const pieData = data
    .filter((value) => value.dato > 0)
    .map((value, index) => ({
      value: value.dato,
      svg: {
        fill: value.fill,
        onPress: () => console.log('press', index),
      },
      key: `pie-${index}`,
    }));

  const deviceWidth = Dimensions.get('window').width;

  console.log('deviceWidth', deviceWidth);

  return (
    <View>
      <View style={{borderBottomColor: '#e2e2e2', borderBottomWidth: 1}}>
        <View style={styleEncuesta.baseQuestion}>
          <FontAwesome name="square" style={styleEncuesta.styleIcon} />
          <Text style={styleEncuesta.textQuestion}>
            CONSIDERA QUE UD ES, CONSIDERA QUE UD ES, SIENDO QUE LO QUE SEA,
            PUEDE DECIR, LO QUE SEA, ENTONCES SI?
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            marginLeft: deviceWidth >= 400 ? deviceWidth / 10 : -20,
            marginTop: 0,
          }}>
          <PieChart
            style={{height: 200, marginLeft: -deviceWidth / 4}}
            data={pieData}
            outerRadius={'75%'}>
            <View
              style={{
                position: 'absolute',
                marginTop: 90,
                flex: 1,
                flexDirection: 'row',
              }}>
              <Text
                onLayout={({
                  nativeEvent: {
                    layout: {width},
                  },
                }) => {
                  setLabelWidth(width);
                }}
                style={{
                  left: deviceWidth / 2 - labelWidth / 2,
                  textAlign: 'center',
                  marginLeft: deviceWidth >= 400 ? 20 : deviceWidth / 4 - 38,
                }}>
                8327
              </Text>
              <FontAwesome
                name="group"
                style={{
                  fontSize: 20,
                  color: '#fbe000',
                  textAlign: 'center',
                  left: deviceWidth / 2 - labelWidth / 2,
                  marginLeft: 5,
                }}
              />
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  marginTop: -15,
                  justifyContent: 'space-between',
                }}>
                <View style={{flexDirection: 'row', marginRight: 30}}>
                  <FontAwesome name="square" style={styleEncuesta.styleIcon} />
                  <Text style={{fontSize: 18, marginLeft: 12}}>SI</Text>
                  <Text style={{fontSize: 18, marginLeft: 10, color: 'green'}}>
                    77%
                  </Text>
                </View>
                <View
                  style={{
                    flex: 2,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginRight: 30,
                  }}>
                  <FontAwesome
                    name="square"
                    style={{fontSize: 24, color: '#e2e2e2'}}
                  />
                  <Text style={{fontSize: 18, marginLeft: 6}}>NO</Text>
                  <Text style={{fontSize: 18, marginLeft: 5, color: 'red'}}>
                    23%
                  </Text>
                </View>
              </View>
            </View>
          </PieChart>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            margin: 20,
            marginTop: 0,
          }}>
          <View
            style={{
              alignItems: 'center',
            }}>
            <Entypo name="bar-graph" style={{fontSize: 33, color: '#fbe000'}} />
            <Text style={{fontSize: 12}}>ESTADISTICAS</Text>
          </View>
          <View
            style={{
              alignItems: 'center',
            }}>
            <Entypo
              name="share-alternative"
              style={{fontSize: 33, color: '#fbe000'}}
            />
            <Text style={{fontSize: 12}}>COMPARTIR</Text>
          </View>
          <View
            style={{
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons
              name="comment-text-outline"
              style={{fontSize: 33, color: '#fbe000'}}
            />
            <Text style={{fontSize: 12}}>COMENTARIOS</Text>
          </View>
        </View>
      </View>
      <View style={{borderBottomColor: '#e2e2e2', borderBottomWidth: 1}}>
        <View style={styleEncuesta.baseQuestion}>
          <FontAwesome name="square" style={styleEncuesta.styleIcon} />
          <Text style={styleEncuesta.textQuestion}>
            CONSIDERA QUE UD ES, CONSIDERA QUE UD ES, SIENDO QUE LO QUE SEA,
            PUEDE DECIR, LO QUE SEA, ENTONCES SI?
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            marginLeft: deviceWidth >= 400 ? deviceWidth / 10 : -20,
            marginTop: 0,
          }}>
          <PieChart
            style={{height: 200, marginLeft: -deviceWidth / 4}}
            data={pieData}
            outerRadius={'75%'}>
            <View
              style={{
                position: 'absolute',
                marginTop: 90,
                flex: 1,
                flexDirection: 'row',
              }}>
              <Text
                onLayout={({
                  nativeEvent: {
                    layout: {width},
                  },
                }) => {
                  setLabelWidth(width);
                }}
                style={{
                  left: deviceWidth / 2 - labelWidth / 2,
                  textAlign: 'center',
                  marginLeft: deviceWidth >= 400 ? 20 : deviceWidth / 4 - 38,
                }}>
                8327
              </Text>
              <FontAwesome
                name="group"
                style={{
                  fontSize: 20,
                  color: '#fbe000',
                  textAlign: 'center',
                  left: deviceWidth / 2 - labelWidth / 2,
                  marginLeft: 5,
                }}
              />
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  marginTop: -15,
                  justifyContent: 'space-between',
                }}>
                <View style={{flexDirection: 'row', marginRight: 30}}>
                  <FontAwesome name="square" style={styleEncuesta.styleIcon} />
                  <Text style={{fontSize: 18, marginLeft: 12}}>SI</Text>
                  <Text style={{fontSize: 18, marginLeft: 10, color: 'green'}}>
                    77%
                  </Text>
                </View>
                <View
                  style={{
                    flex: 2,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginRight: 30,
                  }}>
                  <FontAwesome
                    name="square"
                    style={{fontSize: 24, color: '#e2e2e2'}}
                  />
                  <Text style={{fontSize: 18, marginLeft: 6}}>NO</Text>
                  <Text style={{fontSize: 18, marginLeft: 5, color: 'red'}}>
                    23%
                  </Text>
                </View>
              </View>
            </View>
          </PieChart>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            margin: 20,
            marginTop: 0,
          }}>
          <View
            style={{
              alignItems: 'center',
            }}>
            <Entypo name="bar-graph" style={{fontSize: 33, color: '#fbe000'}} />
            <Text style={{fontSize: 12}}>ESTADISTICAS</Text>
          </View>
          <View
            style={{
              alignItems: 'center',
            }}>
            <Entypo
              name="share-alternative"
              style={{fontSize: 33, color: '#fbe000'}}
            />
            <Text style={{fontSize: 12}}>COMPARTIR</Text>
          </View>
          <View
            style={{
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons
              name="comment-text-outline"
              style={{fontSize: 33, color: '#fbe000'}}
            />
            <Text style={{fontSize: 12}}>COMENTARIOS</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default BodyDetallePlenaria;
