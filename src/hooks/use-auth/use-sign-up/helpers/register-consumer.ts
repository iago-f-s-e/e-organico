import { registerConsumer } from '@src/services/auth';
import { SignUpConsumer } from '@src/store/slices/sign-up-consumer/types';
import { handleRemoveMask, translateSignUpError } from '@src/utils';

type Response = { error: string | null };
type OnError = (message: string) => void;
type ReservePhone = (props: SignUpConsumer, onError: OnError) => Promise<Response>;

// TODO: enviar foto e endereço

export const handleRegisterConsumer: ReservePhone = async (consumer, onError) => {
  const document = handleRemoveMask(consumer.document, 'document');
  const phone = handleRemoveMask(consumer.phone, 'phone');
  const zipCode = handleRemoveMask(consumer.address.zipCode, 'zipCode');
  const address = { ...consumer.address, zipCode };

  const { image: _image, ..._consumer } = consumer;

  const data = { ..._consumer, document, phone, address } as SignUpConsumer;

  try {
    await registerConsumer(data);

    return { error: null };
  } catch (error) {
    const message = translateSignUpError(error);

    onError(message);

    return { error: message };
  }
};
