import React from 'react';
import {View} from 'react-native';
import {Container, Content} from 'native-base';

import HeadPlenaria from './head';
import FooterPlenaria from './footer';
import BodyPlenaeria from './body';

function PlenariaContainer(Props) {
  return (
    <Container>
      <HeadPlenaria navigation={Props.navigation} />
      <Content>
        <View style={{backgroundColor: '#fff'}}>
          <BodyPlenaeria />
        </View>
      </Content>
      <FooterPlenaria />
    </Container>
  );
}

export default PlenariaContainer;
