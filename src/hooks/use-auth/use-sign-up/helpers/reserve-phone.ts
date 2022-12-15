import { reservePhone } from '@src/services/auth';
import { handleRemoveMask, translateSignUpError } from '@src/utils';

type PhoneProps = {
  phone: string;
  deviceName: string;
};

type Response = { error: string | null };
type OnError = (message: string) => void;
type ReservePhone = (props: PhoneProps, onError: OnError) => Promise<Response>;

export const handleReservePhone: ReservePhone = async ({ deviceName, phone }, onError) => {
  const _phone = handleRemoveMask(phone, 'phone');
  try {
    await reservePhone(_phone, deviceName);

    return { error: null };
  } catch (error) {
    const message = translateSignUpError(error);

    onError(message);

    return { error: message };
  }
};
