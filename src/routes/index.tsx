import React, { FC, useState } from 'react';
import { IfElse } from '@src/components';
import { useAppSelector } from '@src/store';
import { AppRoutes } from './app';

import { AuthRoutes } from './auth';

export const Routes: FC = () => {
  const { user } = useAppSelector((state) => state);
  const [isLogged] = useState<boolean>(!!user.token);

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
