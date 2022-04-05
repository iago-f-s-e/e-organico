import { LoginNavigation } from './login';
import { TermsNavigation } from './terms';
import { SignUpNavigation } from './sign-up';

export type AuthNavigation = LoginNavigation | TermsNavigation | SignUpNavigation;
