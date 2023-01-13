import { colorSystem, fontSystem } from '@src/styles';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;

  min-height: 150px;
  margin: 15px 0;
`;

export const TitleContainer = styled.View`
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 30px;
  padding: 0 10px;
`;

export const Title = styled.Text`
  font-family: ${fontSystem.family.semiBold};
  font-size: ${fontSystem.size.medium};
  color: ${colorSystem.basic.black};
`;
