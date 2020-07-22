import React from 'react';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #ccc;
`;
const ButtonsView = styled.View`
  flex-direction: row;
`;
const Image = styled.Image``;
const Button = styled.TouchableOpacity``;
const SecondsText = styled.Text``;
const ButtonText = styled.Text``;

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
