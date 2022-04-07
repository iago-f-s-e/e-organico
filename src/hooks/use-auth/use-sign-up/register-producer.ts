import { registerProducer } from '@src/services/auth';
import { SignUpProducer } from '@src/store/slices/sign-up-producer/types';
import { handleRemoveMask, translateSignUpError } from '@src/utils';

type Response = { error: string | null };
type OnError = (message: string) => void;
type ReservePhone = (props: SignUpProducer, onError: OnError) => Promise<Response>;

// TODO: enviar fotos e endereço

export const handleRegisterProducer: ReservePhone = async (props, onError) => {
  const document = handleRemoveMask(props.document, 'document');
  const phone = handleRemoveMask(props.phone, 'phone');
  const zipCode = handleRemoveMask(props.address.zipCode, 'zipCode');
  const address = { ...props.address, zipCode };

  const {
    image: _image,
    propertyImages: _propertyImages,
    certification: certificationType,
    makeDelivery: _makeDelivery,
    ..._producer
  } = props;

  const makeDelivery = _makeDelivery === 'YES';

  const producer = { certificationType, makeDelivery };

  const data = { ..._producer, document, phone, address, producer };
  try {
    await registerProducer(data);

    return { error: null };
  } catch (error) {
    const message = translateSignUpError(error);

    onError(message);

    return { error: message };
  }
};
