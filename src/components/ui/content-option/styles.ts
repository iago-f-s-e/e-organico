import { colorSystem, fontSystem } from '@src/styles';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;

  align-self: center;
  align-items: center;
  justify-content: space-between;

  height: 70px;
  width: 90%;

  margin: 10px 0;
  padding: 0 20px;

  background: ${colorSystem.basic.white};

  border: 1px;
  border-radius: 10px;
  border-color: ${colorSystem.main.secondary};
`;

export const Content = styled.View`
  flex: 1;

  justify-content: center;
`;

export const Arrow = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

  width: 50px;
  height: 100%;
`;

export const Tittle = styled.Text`
  color: ${colorSystem.main.secondary};
  font-size: ${fontSystem.size.large};
  font-family: ${fontSystem.family.bold};
`;

export const Description = styled.Text`
  color: ${colorSystem.basic.grey};
  font-size: ${fontSystem.size.medium};
  font-family: ${fontSystem.family.semiBold};
`;
