import React from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';
import {Footer, FooterTab, Button} from 'native-base';
import {useNavigation} from '@react-navigation/native';

import {stylePlenaria} from '../../styles/PlenariaStyle';
import {TEXT_COMUNES} from '../../helper/textos';
import {createUsuario} from '../../store/actions/usuarios';

function FooterPlenaria(Props) {
  const {createUsuario} = Props;
  const navigation = useNavigation();

  const objectUsuario = {
    dui: '145696',
    nombres: 'Irvin',
    apellidos: 'Sanchez',
    direccionResidencia: null,
    telefonoResidencia: null,
    noPasaporte: '055',
    email: 'isanchez',
    username: 'isanchez',
    fechaNacimiento: '1994-01-01T00:00:00',
    sexo: 'M',
    fechaCreacion: '2020-04-19T14:07:33.607',
    fechaActualizacion: null,
    activo: true,
    password: '20070008',
    passwordTemporal: null,
    emailRecuperacion: 'isanchez',
    idPais: 2,
    idTipoUsuario: 2,
  };

  return (
    <View style={stylePlenaria.footerBase}>
      <Footer>
        <FooterTab>
          <Button
            style={stylePlenaria.footerButton}
            onPress={() => createUsuario(objectUsuario)}>
            <Text style={stylePlenaria.footerButtonText}>
              {TEXT_COMUNES.TEXT_ENVIAR}
            </Text>
          </Button>
        </FooterTab>
      </Footer>
    </View>
  );
}

const actions = {
  createUsuario,
};

export default connect(null, actions)(FooterPlenaria);
