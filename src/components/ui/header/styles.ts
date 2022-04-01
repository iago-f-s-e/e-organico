import { colors } from '@src/config/theme';

import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  height: 60px;
  padding: 10px 20px 5px;

  background-color: ${colors.main.primary};
`;

export const Button = styled.TouchableOpacity`
  width: 50px;
`;

export const BackButton = styled(Button)`
  flex-direction: row;

  align-items: center;
  justify-content: center;
`;

export const Label = styled.Text``;

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
