import { colors, font } from '@src/config/theme';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;

  padding: 5px;
`;

export const Header = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 90%;
  height: 30px;

  border-bottom-width: 1px;
  border-color: ${colors.others.cloud};
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;

  width: 90%;
  height: 30px;

  margin: 2.5px 0;
`;

export const Label = styled.Text`
  font-family: ${font.family.semiBold};
  font-size: ${font.size.medium};
  color: ${colors.basic.grey};
`;

export const Data = styled(Label)`
  margin-left: 5px;
  color: ${colors.basic.black};
`;

export const Money = styled(Data)`
  color: ${colors.entity.money};
`;

export const Title = styled.Text`
  margin-right: 5px;
  font-family: ${font.family.semiBold};
  font-size: ${font.size.betweenMediumAndLarge};
  color: ${colors.basic.grey};
`;
