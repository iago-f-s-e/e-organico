import { colors, font } from '@src/config/theme';
import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;

  min-height: 200px;
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
  font-family: ${font.family.semiBold};
  font-size: ${font.size.medium};
  color: ${colors.basic.black};
`;

export const ShowMore = styled.Text`
  font-family: ${font.family.semiBold};
  font-size: ${font.size.small};
  color: ${colors.main.secondary};
`;
