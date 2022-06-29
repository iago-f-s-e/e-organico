import { ProducerTransactionDetail } from '@src/store/slices/transaction/types';
import { getWaitingTime, handleInputMask, toPTDay } from '@src/utils';

type State = {
  loading: boolean;
  idParam: string;
  waitingTime: string;
  transaction: ProducerTransactionDetail;
  transactionType: string;
  showWaitingTime: boolean;
  market: {
    has: boolean;
    name: string;
    weekday: string;
  };
};

type Actions = 'changeLoading' | 'onChangeTransaction';

type Action = {
  type: Actions;
  payload?: boolean | string | ProducerTransactionDetail;
};

type Reducer = (state: State, action: Action) => State;

const reducers: { [key in Actions]: Reducer } = {
  changeLoading: (state, action): State => ({ ...state, loading: Boolean(action.payload) }),

  onChangeTransaction: (state, action): State => {
    const transaction = action.payload as ProducerTransactionDetail;

    transaction.total = handleInputMask(transaction.total, 'money', { onlyComma: true });

    const waitingTime = getWaitingTime(transaction.createdAt);
    const transactionType = transaction.type === 'pick' ? 'Retirar na feira' : 'Realizar entrega';
    const showWaitingTime = transaction.status === 'waiting-for-confirmation-from-the-producer';
    const market =
      transaction.type === 'pick'
        ? {
            has: true,
            name: transaction.market.name,
            weekday: toPTDay(transaction.selectedDay.weekday),
          }
        : {
            has: false,
            name: '',
            weekday: '',
          };

    return { ...state, transaction, transactionType, showWaitingTime, market, waitingTime };
  },
};

export const initialState: State = {
  loading: true,
  idParam: '',
  waitingTime: '',
  transaction: null,
  transactionType: 'Retirar na feira',
  showWaitingTime: false,
  market: {
    has: false,
    name: '',
    weekday: '',
  },
};

export const reducer: Reducer = (state, action) => reducers[action.type](state, action);