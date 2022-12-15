import { showToast, useAppDispatch } from '@src/store';

type UseToast = {
  error: (message: string) => void;
  info: (message: string) => void;
  success: (message: string) => void;
};

export const useToast = (): UseToast => {
  const appDispatch = useAppDispatch();

  const error = (message: string) => {
    appDispatch(showToast({ message, type: 'error' }));
  };

  const info = (message: string) => {
    appDispatch(showToast({ message, type: 'info' }));
  };

  const success = (message: string) => {
    appDispatch(showToast({ message, type: 'success' }));
  };

  return { error, info, success };
};
