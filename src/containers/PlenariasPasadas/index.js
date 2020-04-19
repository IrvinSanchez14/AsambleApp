import React, {Fragment} from 'react';
import {View, Text} from 'react-native';
import {Container, Content, ListItem, List} from 'native-base';

import HeaderPlenariaPasada from './header';
import BodyPlenariaPasada from './body';
import FooterPlenariaPasada from './footer';

const mockData = [
  {
    key: 1,
    objectText: [
      {
        question:
          'CONSIDERA QUE UD ES, CONSIDERA QUE UD ES, SIENDO QUE LO QUE SEA, PUEDE DECIR, LO QUE SEA, ENTONCES SI?',
      },
      {
        question: 'UD ES MARICON?',
      },
      {
        question:
          'CONSIDERA QUE UD ES, CONSIDERA QUE UD ES, SIENDO QUE LO QUE SEA, PUEDE DECIR, LO QUE SEA, ENTONCES SI?',
      },
      {
        question:
          'CONSIDERA QUE UD ES, CONSIDERA QUE UD ES, SIENDO QUE LO QUE SEA, PUEDE DECIR, LO QUE SEA, ENTONCES SI?',
      },
    ],
  },
  {
    key: 2,
    objectText: [
      {
        question:
          'CONSIDERA QUE UD ES, CONSIDERA QUE UD ES, SIENDO QUE LO QUE SEA, PUEDE DECIR, LO QUE SEA, ENTONCES SI?',
      },
      {
        question: 'UD ES MARICON?',
      },
      {
        question:
          'CONSIDERA QUE UD ES, CONSIDERA QUE UD ES, SIENDO QUE LO QUE SEA, PUEDE DECIR, LO QUE SEA, ENTONCES SI?',
      },
      {
        question:
          'CONSIDERA QUE UD ES, CONSIDERA QUE UD ES, SIENDO QUE LO QUE SEA, PUEDE DECIR, LO QUE SEA, ENTONCES SI?',
      },
    ],
  },
];

function PlenariaPasadaContainer() {
  return (
    <Container>
      <Content>
        <List>
          {mockData.map((data) => {
            return (
              <View
                key={data.key}
                style={{
                  borderBottomColor: '#e2e2e2',
                  borderBottomWidth: 1,
                  padding: 5,
                }}>
                <HeaderPlenariaPasada />
                <BodyPlenariaPasada data={data} />
                <FooterPlenariaPasada />
              </View>
            );
          })}
        </List>
      </Content>
    </Container>
  );
}

export default PlenariaPasadaContainer;
