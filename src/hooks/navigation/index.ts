import { useRoute as getRoute, Route } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/core';
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

export const useAppNavigation = (): UseNavigate => {
  const { navigate, addListener, goBack } = useNavigation<CombineNavigation>();

  const navigateTo = (path: Paths) => navigate(path);

  const onFocus = (call: CallOnFocus) => addListener('focus', call);

  const getParams = <T extends object>(): Readonly<T> => {
    return getRoute<Route<string, T>>().params;
  };

  return { navigateTo, onFocus, getParams, goBack };
};
