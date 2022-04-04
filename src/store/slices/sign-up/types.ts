type Image = {
  uri: string;
  base64: string;
};

type Address = {
  street: string;
  number: number;
  zipCode: string;
  district: string;
  city: string;
  state: string;
  complement: string;
};

export type SignUpPayload = {
  phone: string;
  name: string;
  email: string;
  document: string;
  password: string;
  image: Image;
  address: Address;
};
