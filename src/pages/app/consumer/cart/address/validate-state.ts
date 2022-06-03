import { Market, Workday } from '@src/store/slices/market/types';
import { State } from './reducer';

type MarketSuccess = {
  type: 'market';
  weekday: Workday;
  market: Market;
};

type AddressSuccess = {
  type: 'address';
  email: string;
  document: string;
  password: string;
};

type Error = {
  type: 'error';
  message: string;
};

type Success = MarketSuccess | AddressSuccess;

type Response = Error | Success;

type ValidateState = (state: State) => Response;

export const validateMarketState: ValidateState = (state: State) => {
  if (!state.market) {
    return { type: 'error', message: 'Selecione uma feira!' };
  }

  if (!state.weekday) {
    return { type: 'error', message: 'Selecione o dia que deseja retirar a compra!' };
  }

  return { type: 'market', weekday: state.weekday, market: state.market };
};
