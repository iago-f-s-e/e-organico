import React from 'react';
import { ScrollView } from 'react-native';

type Props = {
  render: () => JSX.Element;
};

export const ScrollHorizontal = ({ render }: Props): JSX.Element => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      style={{ width: '100%', height: '100%', paddingHorizontal: 5 }}
    >
      {render()}
    </ScrollView>
  );
};
