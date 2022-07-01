import React from 'react';
import { Entypo, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

import { If } from '@src/components/business';
import { colors } from '@src/config/theme';
import { useAppNavigation, useStorage } from '@src/hooks';
import { useAppSelector } from '@src/store';
import { Props } from './types';

import * as S from './styles';

// TODO: definir as actions e header dinâmico por page
export const Header = ({ title, subTitle, hideBackButton, showLogout }: Props): JSX.Element => {
  const { cart } = useAppSelector((state) => state);
  const { goBack, replaceStack } = useAppNavigation();
  const { clearUser } = useStorage();

  const handleLogout = () => {
    replaceStack<'auth'>('login');
    clearUser();
  };

  return (
    <>
      <S.StatusBar />
      <S.Container>
        <S.Content>
          <S.Info>
            <If
              condition={!hideBackButton}
              render={() => (
                <S.BackButton onPress={() => goBack()}>
                  <Entypo name="chevron-left" size={22} color={colors.basic.white} />
                </S.BackButton>
              )}
            />

            <If condition={!!title?.length} render={() => <S.Title>{title}</S.Title>} />
            <If condition={!!subTitle?.length} render={() => <S.SubTitle>{subTitle}</S.SubTitle>} />
          </S.Info>
          <S.Actions>
            <If
              condition={!cart.hasCurrent && showLogout}
              render={() => (
                <S.LogoutButton onPress={handleLogout}>
                  <MaterialIcons name="logout" size={20} color={colors.basic.white} />
                </S.LogoutButton>
              )}
            />

            <If
              condition={cart.hasCurrent}
              render={() => (
                <S.LogoutButton>
                  <FontAwesome5 name="shopping-basket" size={20} color={colors.basic.white} />
                </S.LogoutButton>
              )}
            />
          </S.Actions>
        </S.Content>
      </S.Container>
    </>
  );
};
