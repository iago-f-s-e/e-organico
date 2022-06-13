type PaymentMethodType = 'online' | 'in-person';

export type Payment = {
  id: string;
  type: PaymentMethodType;
  name: string;
};
