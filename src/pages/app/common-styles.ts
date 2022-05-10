import { colors, font } from '@src/config/theme';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const ScrollContainer = styled.ScrollView`
  flex: 1;
  background-color: ${colors.basic.white};
`;

export const Content = styled.View`
  flex: 1;

  min-height: 150px;
  margin: 15px 0;
`;

export const MapContent = styled.View`
  align-items: center;
  justify-content: center;

  background-color: ${colors.main.primary};

  height: 250px;
  width: 90%;
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
  font-family: ${font.family.semiBold};
  font-size: ${font.size.medium};
  color: ${colors.basic.black};
`;

export const SubTitle = styled.Text`
  font-family: ${font.family.semiBold};
  font-size: ${font.size.small};
  color: ${colors.basic.grey};
`;

export const ShowMore = styled.Text`
  font-family: ${font.family.semiBold};
  font-size: ${font.size.small};
  color: ${colors.main.secondary};
`;

export const ButtonConfirm = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 40px;

  background-color: ${colors.main.primary};
`;

export const ButtonCancel = styled(ButtonConfirm)`
  background-color: ${colors.actions.danger};
`;

export const ButtonLabel = styled.Text`
  font-family: ${font.family.semiBold};
  font-size: ${font.size.large};
  color: ${colors.basic.white};
`;
