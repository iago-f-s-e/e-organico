import { ProducerTransactionDetail, TransactionStatus } from '@src/store/slices/transaction/types';
import { getWaitingTime, handleInputMask, toPTDay, translateTransactionStatus } from '@src/utils';

type State = {
  loading: boolean;
  confirming: boolean;
  canceling: boolean;
  hideConfirm: boolean;
  idParam: string;
  status: string;
  waitingTime: string;
  transaction: ProducerTransactionDetail;
  transactionType: string;
  showWaitingTime: boolean;
  label: string;
  market: {
    has: boolean;
    name: string;
    weekday: string;
  };
};

type Actions = 'changeLoading' | 'changeConfirm' | 'changeCancel' | 'onChangeTransaction';

type Action = {
  type: Actions;
  payload?: boolean | string | ProducerTransactionDetail;
};

type Reducer = (state: State, action: Action) => State;

const getLabel = (status: TransactionStatus): string => {
  switch (status) {
    case 'in-separation':
      return 'Separar';

    case 'waiting-for-consumer-to-withdraw':
      return 'Entregar';

    default:
      return 'Confirmar';
  }
};

const getHideConfirm = (status: TransactionStatus): boolean => {
  const conditionsToBeHidden = [
    'canceled-by-consumer',
    'canceled-by-producer',
    'confirmed-by-producer',
    'confirmed-by-consumer',
    'concluded',
  ];

  return conditionsToBeHidden.includes(status);
};

const reducers: { [key in Actions]: Reducer } = {
  changeLoading: (state, action): State => ({ ...state, loading: Boolean(action.payload) }),

  changeConfirm: (state, action): State => ({ ...state, confirming: Boolean(action.payload) }),

  changeCancel: (state, action): State => ({ ...state, canceling: Boolean(action.payload) }),

  onChangeTransaction: (state, action): State => {
    const transaction = action.payload as ProducerTransactionDetail;

    transaction.total = handleInputMask(transaction.total, 'money', { onlyComma: true });

    const hideConfirm = getHideConfirm(transaction.status);
    const label = getLabel(transaction.status);
    const waitingTime = getWaitingTime(transaction.createdAt);
    const status = translateTransactionStatus(transaction.status, 'producer');

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

    return {
      ...state,
      transaction,
      transactionType,
      showWaitingTime,
      market,
      waitingTime,
      label,
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
  waitingTime: '',
  transaction: null,
  transactionType: 'Retirar na feira',
  label: 'Confirmar',
  showWaitingTime: false,
  market: {
    has: false,
    name: '',
    weekday: '',
  },
};

export const reducer: Reducer = (state, action) => reducers[action.type](state, action);
