import { If, Map } from '@src/components/business';
import { Market, Workday } from '@src/store/slices/market/types';
import React from 'react';
import { CartMarketDetailCard } from '../../cards';
import { ListConsumerMarket } from '../../list';

import * as C_S from '../common-styles';

type Props = {
  markets: Market[];
  change: boolean;
  selected: {
    cartMarket: Market;
    market: Market;
    weekday: Workday;
  };
  actions: {
    selectMarket: (market: Market) => void;
    selectDay: (weekday: Workday) => void;
    confirmChangeMarket: () => void;
    cancelChangeMarket: () => void;
  };
};

export const CartMarket = ({ markets, selected, actions, change }: Props): JSX.Element => {
  return (
    <C_S.Container>
      <C_S.Content>
        <If
          condition={!!selected.market}
          render={() => (
            <C_S.Content>
              <C_S.TitleContainer>
                <C_S.Title>Feira selecionada</C_S.Title>
              </C_S.TitleContainer>
              <CartMarketDetailCard
                change={change}
                market={selected.market}
                weekday={selected.weekday}
                actions={{
                  selectDay: actions.selectDay,
                  cancelChange: actions.cancelChangeMarket,
                  confirmChange: actions.confirmChangeMarket,
                }}
              />
            </C_S.Content>
          )}
        />

        <C_S.TitleContainer>
          <C_S.Title>Feiras disponíveis</C_S.Title>
        </C_S.TitleContainer>

        <Map
          data={markets}
          render={(value, index) => (
            <ListConsumerMarket
              key={index.toString()}
              market={value}
              current={selected.market}
              selected={selected.cartMarket}
              onSelect={(market) => actions.selectMarket(market)}
            />
          )}
        />
      </C_S.Content>
    </C_S.Container>
  );
};
