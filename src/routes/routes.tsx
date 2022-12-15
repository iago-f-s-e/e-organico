import React, { FC, useState, useEffect } from 'react';
import { IfElse } from '@src/components';
import { useAppSelector } from '@src/store';
import { AppRoutes } from './app';

import { AuthRoutes } from './auth';

export const Routes: FC = () => {
  const { current } = useAppSelector((state) => state);
  const [isLogged, setIsLogged] = useState<boolean>(!!current.token);

  useEffect(() => {
    setIsLogged(!!current.token);
  }, [current.token]);

  return (
    <IfElse
      condition={isLogged}
      render={{
        toBeFalsy: () => <AuthRoutes />,
        toBeTruthy: () => <AppRoutes />,
      }}
    />
  );
};
