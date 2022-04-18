import { colors, font } from '@src/config/theme';
import styled from 'styled-components/native';

export const PropertyContainer = styled.View`
  flex: 1;
  height: 320px;
`;

export const ContentAddress = styled.View`
  flex-direction: row;
`;

export const AddressContent = styled.View`
  flex: 1;
  width: 50%;
`;

export const AddressSection = styled.View`
  flex-direction: row;

  margin: 5px 0;
`;

export const LabelAddress = styled.Text`
  font-family: ${font.family.semiBold};
  font-size: ${font.size.medium};

  color: ${colors.basic.black};
  margin-right: 5px;
`;

export const DataAddress = styled.Text`
  font-family: ${font.family.semiBold};
  font-size: ${font.size.medium};
  color: ${colors.basic.grey};
`;
