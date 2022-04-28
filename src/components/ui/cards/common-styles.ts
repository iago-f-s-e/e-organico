import { colors, font, shadow } from '@src/config/theme';
import styled from 'styled-components/native';

export const Container = styled.View.attrs(shadow)`
  flex: 1;

  align-self: center;

  width: 90%;
  height: 200px;

  border-radius: 5px;

  background-color: ${colors.basic.white};
`;

export const SmallContainer = styled.View`
  align-self: center;

  width: 90%;
  height: 50px;

  border-radius: 5px;

  background-color: ${colors.basic.white};
`;

export const BigContainer = styled.View.attrs(shadow)`
  flex: 1;

  align-self: center;

  width: 90%;
  height: 300px;

  border-radius: 5px;

  background-color: ${colors.basic.white};
`;

export const ScrollContainer = styled.ScrollView`
  flex: 1;

  padding: 0 5px;
`;

export const InfoContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  height: 100px;
`;

export const SmallInfoContainer = styled(InfoContainer)`
  height: 100%;
`;

export const SubTitleContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  height: 20px;

  border-top-width: 0.5px;
  border-color: ${colors.basic.grey};
`;

export const ImageContainer = styled.View`
  width: 90px;
  height: 90px;
`;

export const InfoContent = styled.View`
  flex: 1;
  height: 90px;
`;

export const SmallInfoContent = styled(InfoContent)`
  height: 95%;
`;

export const ImageContent = styled.Image`
  width: 100%;
  height: 100%;
`;

export const Name = styled.Text`
  font-family: ${font.family.semiBold};
  font-size: ${font.size.large};
  color: ${colors.basic.black};
`;

export const Info = styled.Text`
  font-family: ${font.family.semiBold};
  font-size: ${font.size.medium};
  color: ${colors.basic.grey};
`;

export const SubTitle = styled.Text`
  font-family: ${font.family.semiBold};
  font-size: ${font.size.medium};
  color: ${colors.basic.grey};
`;

// ### Address  ###

export const AddressContainer = styled.View`
  flex: 1;
  min-height: 360px;
`;

export const AddressContent = styled.View`
  flex: 1;
  width: 50%;
`;

export const AddressSection = styled.View`
  flex-direction: row;
  margin: 5px 0;
`;

export const AddressLabel = styled.Text`
  font-family: ${font.family.semiBold};
  font-size: ${font.size.medium};

  color: ${colors.basic.black};
  margin-right: 5px;
`;

export const AddressData = styled.Text`
  font-family: ${font.family.semiBold};
  font-size: ${font.size.medium};
  color: ${colors.basic.grey};
`;

export const WorkDaysSection = styled.View`
  flex: 1;

  height: 100px;
`;

export const WorkDaysTitle = styled.Text`
  text-align: center;

  font-family: ${font.family.semiBold};
  font-size: ${font.size.medium};
  color: ${colors.basic.greyText};
`;

export const WorkDaysContainer = styled.View`
  height: 125px;

  border-radius: 5px;

  /* overflow: hidden; */
`;
