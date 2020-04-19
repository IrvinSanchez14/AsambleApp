import React from 'react';
import {View, Text} from 'react-native';
import {Footer, FooterTab, Button} from 'native-base';
import {useNavigation} from '@react-navigation/native';

import {stylePlenaria} from '../../styles/PlenariaStyle';
import {TEXT_COMUNES} from '../../helper/textos';

function FooterPlenaria() {
  const navigation = useNavigation();

  return (
    <View style={stylePlenaria.footerBase}>
      <Footer>
        <FooterTab>
          <Button
            style={stylePlenaria.footerButton}
            onPress={() => navigation.goBack()}>
            <Text style={stylePlenaria.footerButtonText}>
              {TEXT_COMUNES.TEXT_ENVIAR}
            </Text>
          </Button>
        </FooterTab>
      </Footer>
    </View>
  );
}

export default FooterPlenaria;
