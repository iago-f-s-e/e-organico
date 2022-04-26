import { If, Map } from '@src/components/business';
import { Market, WorkDay } from '@src/store/slices/market/types';
import React from 'react';
import { CartMarketDetailCard } from '../../cards';
import { ListConsumerMarket } from '../../list';

import * as C_S from '../common-styles';

type Props = {
  markets: Market[];
  selected: {
    market: Market;
    day: WorkDay;
  };
  actions: {
    selectMarket: (market: Market) => void;
    selectDay: (day: WorkDay) => void;
  };
};

export const CartMarket = ({ markets, selected, actions }: Props): JSX.Element => {
  return (
    <C_S.Container>
      <C_S.Content>
        <If
          condition={!!selected.market}
          render={() => (
            <C_S.Content>
              <CartMarketDetailCard
                market={selected.market}
                day={selected.day}
                actions={{
                  selectDay: actions.selectDay,
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
              onSelect={(market) => actions.selectMarket(market)}
            />
          )}
        />
      </C_S.Content>
    </C_S.Container>
  );
};
