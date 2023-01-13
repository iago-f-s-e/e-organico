import { colorSystem, fontSystem } from '@src/styles';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const ScrollContainer = styled.ScrollView`
  flex: 1;
  background-color: ${colorSystem.basic.white};
`;

export const Content = styled.View`
  flex: 1;

  align-items: center;

  min-height: 50px;
  margin: 15px 0;
`;

export const MapContent = styled.View`
  align-items: center;
  justify-content: center;

  background-color: ${colorSystem.main.primary};

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
  font-family: ${fontSystem.family.semiBold};
  font-size: ${fontSystem.size.medium};
  color: ${colorSystem.basic.black};
`;

export const SubTitle = styled.Text`
  font-family: ${fontSystem.family.semiBold};
  font-size: ${fontSystem.size.small};
  color: ${colorSystem.basic.grey};
`;

export const ShowMore = styled.Text`
  font-family: ${fontSystem.family.semiBold};
  font-size: ${fontSystem.size.small};
  color: ${colorSystem.main.secondary};
`;

export const ButtonConfirm = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 40px;

  background-color: ${colorSystem.main.primary};
`;

export const ButtonCancel = styled(ButtonConfirm)`
  background-color: ${colorSystem.actions.danger};
`;

export const ButtonLabel = styled.Text`
  font-family: ${fontSystem.family.semiBold};
  font-size: ${fontSystem.size.large};
  color: ${colorSystem.basic.white};
`;
