import { StackNavigationProp } from '@react-navigation/stack';
import { ConsumerStack } from '@src/@types/routes/types';

type ConsumeHomeNavigation = StackNavigationProp<ConsumerStack, 'home'>;

export type ConsumerNavigation = ConsumeHomeNavigation;
