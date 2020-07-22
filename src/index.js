import React from 'react';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #00aeef;
`;
const ButtonsView = styled.View`
  flex-direction: row;
  height: 40px;
  margin-top: 120px;
`;
const Image = styled.Image``;
const Button = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  height: 40px;
  margin: 17px;
  border-radius: 9px;
`;
const SecondsText = styled.Text`
  margin-top: -160px;
  color: #fff;
  font-size: 65px;
  font-weight: bold;
`;
const ButtonText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #00aeef;
`;

export default function App() {
  return (
    <Page>
      <Image source={require('./cronometro.png')} />
      <SecondsText>0.0</SecondsText>

      <ButtonsView>
        <Button>
          <ButtonText>Vai</ButtonText>
        </Button>
        <Button>
          <ButtonText>Zerar</ButtonText>
        </Button>
      </ButtonsView>
    </Page>
  );
}
