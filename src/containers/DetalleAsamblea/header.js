import React from 'react';
import {
  Header,
  Left,
  Body,
  Right,
  Title,
  Subtitle,
  Button,
  Icon,
} from 'native-base';

function HeaderDetallePlenaria() {
  return (
    <Header style={{backgroundColor: '#fbe000'}} androidStatusBarColor="gray">
      <Left style={{flex: 1}}>
        <Button transparent>
          <Icon style={{fontSize: 33}} type="FontAwesome" name="times-circle" />
        </Button>
      </Left>
      <Body style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Title style={{color: '#000', fontSize: 14}}>ASAMBLEA #47</Title>
        <Subtitle style={{color: '#000', fontSize: 9}}>
          18 DE MARZO 2020
        </Subtitle>
      </Body>
      <Right style={{flex: 1}} />
    </Header>
  );
}

export default HeaderDetallePlenaria;
