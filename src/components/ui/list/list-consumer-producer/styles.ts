import { colorSystem, fontSystem } from '@src/styles';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;

  justify-content: center;
  align-items: center;

  height: 80px;
  min-width: 300px;

  margin: 10px 5px;
`;

export const Content = styled.TouchableOpacity`
  height: 100%;
  width: 70%;

  padding: 5px;
`;

export const InfoContainer = styled.View``;

export const Like = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 10%;
`;

export const RowInfo = styled.View`
  flex-direction: row;
  align-items: center;
  height: 20px;
  width: 100%;
`;

export const Title = styled.Text`
  font-family: ${fontSystem.family.semiBold};
  font-size: ${fontSystem.size.large};
  color: ${colorSystem.basic.black};
`;

export const Info = styled.Text`
  font-family: ${fontSystem.family.semiBold};
  font-size: ${fontSystem.size.small};
  color: ${colorSystem.basic.grey};
`;
