import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStack } from '@src/@types/routes/types';

export type LoginNavigation = StackNavigationProp<AuthStack, 'login'>;
