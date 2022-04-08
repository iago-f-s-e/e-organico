import * as store from '@src/store';

type UseStorage = {
  clearPersist: () => void;
};

export const useStorage = (): UseStorage => {
  const appDispatch = store.useAppDispatch();

  const clearPersist = () => {
    appDispatch(store.clearSignUpConsumer());
    appDispatch(store.clearSignUpProducer());
    appDispatch(store.clearSignUpUserType());
    appDispatch(store.clearSignUpMarket());
  };

  return { clearPersist };
};
