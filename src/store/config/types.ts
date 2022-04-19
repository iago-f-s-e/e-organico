import { SignUpConsumer } from '../slices/sign-up-consumer/types';
import { SignUpMarket } from '../slices/sign-up-market/types';
import { SignUpProducer } from '../slices/sign-up-producer/types';
import { SignUpProduct } from '../slices/sign-up-product/types';
import { SignUpUserType } from '../slices/sign-up-user-type/types';
import { Toast } from '../slices/toast/types';
import { Ui } from '../slices/ui/types';

export type State = {
  signUpConsumer: SignUpConsumer;
  signUpMarket: SignUpMarket;
  signUpProducer: SignUpProducer;
  signUpProduct: SignUpProduct;
  signUpUserType: SignUpUserType;
  toast: Toast;
  ui: Ui;
};
