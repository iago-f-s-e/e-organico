import { ConsumerTransactionDetail, TransactionStatus } from '@src/store/slices/transaction/types';
import { handleInputMask, toPTDay, translateTransactionStatus } from '@src/utils';

type State = {
  loading: boolean;
  confirming: boolean;
  canceling: boolean;
  hideConfirm: boolean;
  idParam: string;
  status: string;
  transaction: ConsumerTransactionDetail;
  market: {
    has: boolean;
    name: string;
    weekday: string;
  };
};

type Actions = 'changeLoading' | 'changeConfirm' | 'changeCancel' | 'onChangeTransaction';

type Action = {
  type: Actions;
  payload?: boolean | string | ConsumerTransactionDetail;
};

type Reducer = (state: State, action: Action) => State;

const getHideConfirm = (status: TransactionStatus): boolean => {
  const conditionsToBeHidden = [
    'concluded',
    'canceled-by-producer',
    'canceled-by-consumer',
    'confirmed-by-consumer',
    'waiting-for-confirmation-from-the-producer',
    'in-separation',
  ];

  return conditionsToBeHidden.includes(status);
};

const reducers: { [key in Actions]: Reducer } = {
  changeLoading: (state, action): State => ({ ...state, loading: Boolean(action.payload) }),

  changeConfirm: (state, action): State => ({ ...state, confirming: Boolean(action.payload) }),

  changeCancel: (state, action): State => ({ ...state, canceling: Boolean(action.payload) }),

  onChangeTransaction: (state, action): State => {
    const transaction = action.payload as ConsumerTransactionDetail;

    transaction.total = handleInputMask(transaction.total, 'money', { onlyComma: true });

    const hideConfirm = getHideConfirm(transaction.status);
    const status = translateTransactionStatus(transaction.status, 'consumer');

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

    return {
      ...state,
      transaction,
      market,
      hideConfirm,
      status,
    };
  },
};

export const initialState: State = {
  loading: true,
  confirming: false,
  canceling: false,
  hideConfirm: false,
  idParam: '',
  status: '',
  transaction: null,
  market: {
    has: false,
    name: '',
    weekday: '',
  },
};

export const reducer: Reducer = (state, action) => reducers[action.type](state, action);
