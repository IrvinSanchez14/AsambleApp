import * as React from 'react';
import {TouchableOpacity} from 'react-native';
import {
  Container,
  Card,
  CardItem,
  Body,
  Footer,
  FooterTab,
  Button,
  Text,
} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {View} from 'react-native';

function HomeScreen(Props) {
  const sendPush = () => {
    Props.navigation.navigate('Detalles');
  };

  return (
    <Container>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          onPress={() => Props.navigation.navigate('plenarias_pasadas')}>
          <View style={{padding: 20}}>
            <Card
              style={{
                width: wp('33.78%'),
                height: hp('26.35%'),
                flexDirection: 'column',
                justifyContent: 'space-around',
                backgroundColor: '#fbe000',
              }}>
              <CardItem
                style={{
                  backgroundColor: '#fbe000',
                }}>
                <Body>
                  <Text>PLENARIAS PASADAS</Text>
                </Body>
              </CardItem>
            </Card>
          </View>
        </TouchableOpacity>
        <View style={{padding: 20}}>
          <Card
            style={{
              width: wp('34.78%'),
              height: hp('26.35%'),
              flexDirection: 'column',
              justifyContent: 'space-around',
              backgroundColor: '#fbe000',
            }}>
            <CardItem
              style={{
                backgroundColor: '#fbe000',
              }}>
              <Body>
                <Text>NOTICIAS DEL PUEBLO</Text>
              </Body>
            </CardItem>
          </Card>
        </View>
      </View>

      <Footer style={{backgroundColor: '#ffffff'}}>
        <FooterTab style={{backgroundColor: '#ffffff'}}>
          <Button vertical onPress={() => sendPush()}>
            <FontAwesome
              style={{fontSize: 24, color: '#fbe000'}}
              name="history"
            />
            <Text style={{color: '#000000'}}>Historial</Text>
          </Button>
          <Button
            vertical
            onPress={() => Props.navigation.navigate('detalle_asamblea')}>
            <FontAwesome
              name="paper-plane"
              style={{fontSize: 24, color: '#fbe000'}}
            />
            <Text style={{color: '#000000'}}>Enviar</Text>
          </Button>
          <Button vertical onPress={() => Props.navigation.navigate('Ajustes')}>
            <FontAwesome name="cog" style={{fontSize: 24, color: '#fbe000'}} />
            <Text style={{color: '#000000'}}>Ajustes</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
}

export default HomeScreen;
