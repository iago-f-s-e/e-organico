import { useRoute as getRoute, Route } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { AppConsumerScreens, AppProducerScreens } from '@src/routes/app';
import { AuthScreens } from '@src/routes/auth';

type CallOnFocus = () => void;

type Consumer = 'consumer';
type Producer = 'producer';
type Auth = 'auth';

type NavigationType = Consumer | Auth | Producer;

type Paths<Type> = Type extends Auth
  ? AuthScreens
  : Type extends Producer
  ? AppProducerScreens
  : AppConsumerScreens;

type Params = {
  id?: string;
};

type Options = {
  popNavigationToTop?: boolean;
  popNavigation?: boolean;
  popQuantity?: number;
};

type UseNavigate = {
  onFocus: (call: CallOnFocus) => () => void;
  getParams: <T extends object>() => Readonly<T>;
  getIdParams: () => Readonly<string>;
  navigateTo: <Type extends NavigationType>(
    path: Paths<Type>,
    params?: Params | null,
    options?: Options,
  ) => void;
  goBack: () => void;
};

export const useAppNavigation = (): UseNavigate => {
  const { navigate, addListener, goBack, pop, popToTop } = useNavigation<StackNavigationProp<any>>(); // eslint-disable-line

  const navigateTo = <Type extends NavigationType>(
    path: Paths<Type>,
    params?: Params | null,
    options?: Options,
  ) => {
    if (options?.popNavigationToTop) popToTop();

    if (options?.popNavigation) pop(options.popQuantity);

    return navigate(path, params);
  };

  const onFocus = (call: CallOnFocus) => addListener('focus', call);

  const getParams = <T extends object>(): Readonly<T> => {
    return getRoute<Route<string, T>>().params;
  };

  const getIdParams = () => {
    return getParams<{ id: string }>().id;
  };

  return { navigateTo, onFocus, getParams, goBack, getIdParams };
};
