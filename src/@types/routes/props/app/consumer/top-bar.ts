import { MaterialTopTabNavigationProp } from '@react-navigation/material-top-tabs';
import { ConsumerTopTab } from '@src/@types/routes/types';

type ConsumerMarketNavigation = MaterialTopTabNavigationProp<ConsumerTopTab, 'consumer-market'>;
type ConsumerProducerNavigation = MaterialTopTabNavigationProp<ConsumerTopTab, 'consumer-producer'>;

export type ConsumerTopBarNavigation = ConsumerMarketNavigation | ConsumerProducerNavigation;
