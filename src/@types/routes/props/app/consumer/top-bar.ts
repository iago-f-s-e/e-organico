import { MaterialTopTabNavigationProp } from '@react-navigation/material-top-tabs';
import { ConsumerTopTab } from '@src/@types/routes/types';

type ConsumerMarketNavigation = MaterialTopTabNavigationProp<ConsumerTopTab, 'consumer-markets'>;
type ConsumerProducerNavigation = MaterialTopTabNavigationProp<ConsumerTopTab, 'consumer-producers'>;

export type ConsumerTopBarNavigation = ConsumerMarketNavigation | ConsumerProducerNavigation;
