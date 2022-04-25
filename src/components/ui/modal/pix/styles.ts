import styled from 'styled-components/native';

export const Container = styled.Modal``;

export const Main = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  height: 50px;

  padding: 0 5px;
`;

export const HeaderTitle = styled.Text`
  text-align: center;
`;

export const LogoContainer = styled.View`
  height: 128px;
  width: 128px;
`;

export const LogoContent = styled.Image`
  height: 100%;
  width: 100%;
`;

export const Section = styled.View`
  flex: 1;
`;

export const InfoContainer = styled.View`
  flex: 1;
`;

export const InfoTitle = styled.Text``;

export const InfoDescription = styled.Text``;

export const CodeContainer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 90%;
  height: 40px;

  padding: 0 5px;

  border-radius: 5px;
  border-width: 1px;
`;

export const Code = styled.Text`
  width: 90%;
`;

export const CopyButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

  width: 90%;
  height: 40px;
  margin: 10px 0;

  border-radius: 5px;

  background-color: #f00;
`;

export const CopyLabel = styled.Text``;
