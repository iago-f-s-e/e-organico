type PaymentMethodType = 'online' | 'in-person';

export type PaymentMethod = {
  id: string;
  type: PaymentMethodType;
  name: string;
};
