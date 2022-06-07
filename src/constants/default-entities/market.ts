import { MarketDetail } from '@src/store/slices/market/types';
import { defaultAddress } from './address';
import { defaultImage } from './image';

export const defaultMarketDetail: MarketDetail = {
  id: 'MARKET_NOT_FOUND',
  isOpen: false,
  address: defaultAddress,
  name: 'Não encontrado',
  image: defaultImage,
  workdays: [],
  producers: [],
};
