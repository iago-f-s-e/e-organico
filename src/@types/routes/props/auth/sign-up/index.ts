import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStack } from '@src/@types/routes/types';

type AddressNavigation = StackNavigationProp<AuthStack, 'sign-up-address'>;
type CredentialsNavigation = StackNavigationProp<AuthStack, 'sign-up-credentials'>;
type FinishedNavigation = StackNavigationProp<AuthStack, 'sign-up-finished'>;
type IdentifiersNavigation = StackNavigationProp<AuthStack, 'sign-up-identifiers'>;
type PropertyImagesNavigation = StackNavigationProp<AuthStack, 'sign-up-property-images'>;
type SelectTypesNavigation = StackNavigationProp<AuthStack, 'sign-up-select-types'>;
type UserTypeNavigation = StackNavigationProp<AuthStack, 'sign-up-user-type'>;
type MarketNavigation = StackNavigationProp<AuthStack, 'sign-up-market'>;
type InitialProductNavigation = StackNavigationProp<AuthStack, 'sign-up-initial-product'>;

export type SignUpNavigation =
  | AddressNavigation
  | CredentialsNavigation
  | FinishedNavigation
  | IdentifiersNavigation
  | PropertyImagesNavigation
  | SelectTypesNavigation
  | UserTypeNavigation
  | MarketNavigation
  | InitialProductNavigation;
