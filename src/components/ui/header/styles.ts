import { colors, font } from '@src/config/theme';

import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  height: 60px;
  padding: 10px 20px 5px;

  background-color: ${colors.main.primary};
`;

export const Button = styled.TouchableOpacity`
  width: 50px;
`;

export const BackButton = styled(Button)`
  flex-direction: row;

  position: absolute;
  top: 20px;
  left: 10px;

  align-items: center;
  justify-content: center;
`;

export const Label = styled.Text``;

export const Title = styled.Text`
  font-size: ${font.size.large};
  font-family: ${font.family.semiBold};
  color: ${colors.basic.white};
`;

// const styles = {
//   iconStyle: {
//     fontSize: 30,
//     marginRight: 5,
//     color: Colors.primary,
//   },
//   titleStyle: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   textStyle: { fontSize: 20, textAlign: 'center', maxWidth: width - 100 },
// };
