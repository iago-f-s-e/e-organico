import * as store from '@src/store';

type UseStorage = {
  clearPersist: () => void;
  clearCart: () => void;
  clearUser: () => void;
};

export const useStorage = (): UseStorage => {
  const appDispatch = store.useAppDispatch();

  const clearPersist = () => {
    appDispatch(store.clearSignUpConsumer());
    appDispatch(store.clearSignUpProducer());
    appDispatch(store.clearSignUpUserType());
    appDispatch(store.clearSignUpMarket());
    appDispatch(store.clearSignUpProduct());
    appDispatch(store.clearCart());
    appDispatch(store.clearSection());
    appDispatch(store.clearCartUi());
  };

  const clearCart = () => {
    appDispatch(store.clearCart());
    appDispatch(store.clearSection());
    appDispatch(store.clearCartUi());
  };

  const clearUser = () => {
    clearPersist();
    appDispatch(store.clearUser());
  };

  return { clearPersist, clearCart, clearUser };
};
