import { useRoute as getRoute, Route } from '@react-navigation/native';
import { useNavigation as _useNavigation } from '@react-navigation/core';
import { CombineNavigation } from '@src/@types/routes';
import { AuthScreens } from '@src/routes/auth';

type CallOnFocus = () => void;

type Paths = AuthScreens;

type UseNavigate = {
  onFocus: (call: CallOnFocus) => () => void;
  getParams: <T extends object>() => Readonly<T>;
  navigateTo: (path: Paths) => void;
  goBack: () => void;
};

// TODO: testar o route
export const useNavigation = (): UseNavigate => {
  const { navigate, addListener, goBack } = _useNavigation<CombineNavigation>();

  const navigateTo = (path: Paths) => navigate(path);

  const onFocus = (call: CallOnFocus) => addListener('focus', call);

  const getParams = <T extends object>(): Readonly<T> => {
    return getRoute<Route<string, T>>().params;
  };

  return { navigateTo, onFocus, getParams, goBack };
};
