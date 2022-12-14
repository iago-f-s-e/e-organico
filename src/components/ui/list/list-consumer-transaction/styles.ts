import { colors, font, shadow } from '@src/config/theme';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  align-self: center;
  justify-content: center;
  align-items: center;

  min-height: 80px;
  width: 97%;

  margin: 10px 0;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  min-height: 20px;

  background-color: ${colors.basic.transparent};
`;

export const StatusContainer = styled.View``;

export const StatusContent = styled.View.attrs(shadow)`
  justify-content: center;
  align-items: center;

  min-width: 40%;
  min-height: 20px;

  padding: 0 5px;

  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const TransactionNumberContainer = styled(StatusContent)`
  min-width: 10%;
  min-height: 20px;

  background-color: ${colors.entity.heart};
`;

export const Content = styled.View.attrs(shadow)`
  flex: 1;
  width: 100%;

  background-color: ${colors.basic.white};

  overflow: hidden;

  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const InfoContainer = styled.View`
  align-self: center;
  justify-content: center;
  align-items: center;

  width: 90%;
  height: 50px;

  margin-bottom: 5px;

  border-bottom-width: 1px;
  border-color: ${colors.others.cloud};
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;

  margin: 2px 0;
  padding: 0 5px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  align-self: center;
  justify-content: space-around;

  width: 90%;
  height: 50px;
  margin-top: 10px;

  border-top-width: 1px;
  border-color: ${colors.others.cloud};
`;

export const OpenTransactionButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  width: 45%;
  height: 35px;

  border-radius: 5px;

  background-color: ${colors.main.primary};
`;

export const ConfirmTransactionButton = styled(OpenTransactionButton)`
  background-color: ${colors.basic.white};

  border-width: 1px;
  border-color: ${colors.main.primary};
`;

export const OpenTransactionLabel = styled.Text`
  font-family: ${font.family.semiBold};
  font-size: ${font.size.medium};
  color: ${colors.basic.white};
`;

export const ConfirmTransactionLabel = styled(OpenTransactionLabel)`
  color: ${colors.main.primary};
`;

export const Status = styled.Text`
  font-family: ${font.family.semiBold};
  font-size: ${font.size.small};
  color: ${colors.basic.white};
`;

export const TransactionNumber = styled(Status)``;

export const ProducerName = styled.Text`
  font-family: ${font.family.semiBold};
  font-size: ${font.size.betweenMediumAndLarge};
  color: ${colors.basic.grey};
`;

export const Money = styled.Text`
  font-family: ${font.family.bold};
  font-size: ${font.size.medium};
  color: ${colors.entity.money};
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
