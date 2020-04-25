import React from 'react';
import {Container, Content} from 'native-base';
import HeaderDetallePlenaria from './header';
import BodyDetallePlenaria from './body';

function DetalleAsambleaContainer() {
  return (
    <Container>
      <HeaderDetallePlenaria />
      <Content>
        <BodyDetallePlenaria />
      </Content>
    </Container>
  );
}

export default DetalleAsambleaContainer;
