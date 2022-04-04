import { SignUpConsumer } from '../slices/sign-up-consumer/types';
import { SignUpProducer } from '../slices/sign-up-producer/types';
import { SignUpUserType } from '../slices/sign-up-user-type/types';
import { Toast } from '../slices/toast/types';

export type State = {
  signUpConsumer: SignUpConsumer;
  signUpProducer: SignUpProducer;
  signUpUserType: SignUpUserType;
  toast: Toast;
};
