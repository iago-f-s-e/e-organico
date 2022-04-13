import { LoginNavigation } from './login';
import { TermsNavigation } from './terms';
import { SignUpNavigation } from './sign-up';
import { AppNavigation } from '../app';

export type AuthNavigation = LoginNavigation | TermsNavigation | SignUpNavigation | AppNavigation;
