import React, { FC } from 'react';
import { View, Text } from 'react-native';

export const Home: FC = () => {
  return (
    <View>
      <View>
        <Text>Feiras</Text>

        <View>
          <Text>últimas feiras</Text>
          <Text>feiras abertas</Text>
          <Text>feiras com mais produtores</Text>
        </View>
      </View>

      <View>
        <Text>Produtores</Text>

        <View>
          <Text>últimos produtores</Text>
          <Text>produtores mais famosos</Text>
          <Text>todos produtores</Text>
        </View>
      </View>

      <View>
        <Text>Produtores</Text>
      </View>
    </View>
  );
};
