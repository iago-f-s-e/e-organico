import { reserveDocument, reserveEmail } from '@src/services/auth';
import { handleRemoveMask, translateSignUpError } from '@src/utils';

type PhoneProps = {
  email: string;
  document: string;
  deviceName: string;
};

type Response = { error: string | null };
type OnError = (message: string) => void;
type ReservePhone = (props: PhoneProps, onError: OnError) => Promise<Response>;

export const handleReserveCredentials: ReservePhone = async (
  { deviceName, document, email },
  onError,
) => {
  const _document = handleRemoveMask(document, 'document');
  try {
    await Promise.all([reserveDocument(_document, deviceName), reserveEmail(email, deviceName)]);

    return { error: null };
  } catch (error) {
    const message = translateSignUpError(error);

    onError(message);

    return { error: message };
  }
};
