import { useRoute as getRoute, Route } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/core';
import { AuthScreens } from '@src/routes/auth';
import { ConsumerScreens } from '@src/routes/app/consumer';
import { StackNavigationProp } from '@react-navigation/stack';

type CallOnFocus = () => void;

// TODO: trocar ConsumerScreens por AppScreens

type Paths = AuthScreens | ConsumerScreens;

type UseNavigate = {
  onFocus: (call: CallOnFocus) => () => void;
  getParams: <T extends object>() => Readonly<T>;
  navigateTo: (path: Paths) => void;
  goBack: () => void;
};

export const useAppNavigation = (): UseNavigate => {
  const { navigate, addListener, goBack } = useNavigation<StackNavigationProp<any>>(); // eslint-disable-line

  const navigateTo = (path: Paths) => navigate(path);

  const onFocus = (call: CallOnFocus) => addListener('focus', call);

  const getParams = <T extends object>(): Readonly<T> => {
    return getRoute<Route<string, T>>().params;
  };

  return { navigateTo, onFocus, getParams, goBack };
};
