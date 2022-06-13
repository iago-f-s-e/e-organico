import { Cart } from '../slices/cart/types';
import { Section } from '../slices/section/types';
import { SignUpConsumer } from '../slices/sign-up-consumer/types';
import { SignUpMarket } from '../slices/sign-up-market/types';
import { SignUpProducer } from '../slices/sign-up-producer/types';
import { SignUpProduct } from '../slices/sign-up-product/types';
import { SignUpUserType } from '../slices/sign-up-user-type/types';
import { Toast } from '../slices/toast/types';
import { Ui } from '../slices/ui/types';
import { LoggedUser } from '../slices/user/types';

export type State = {
  cart: Cart;
  section: Section;
  signUpConsumer: SignUpConsumer;
  signUpMarket: SignUpMarket;
  signUpProducer: SignUpProducer;
  signUpProduct: SignUpProduct;
  signUpUserType: SignUpUserType;
  toast: Toast;
  ui: Ui;
  user: LoggedUser;
};
