import { StackNavigationProp } from '@react-navigation/stack';
import { AppStack } from '@src/@types/routes/types';

type HomeNavigation = StackNavigationProp<AppStack, 'home'>;

export type AppNavigation = HomeNavigation;
