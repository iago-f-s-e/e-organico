export const isValidEmail = (value: string): boolean => {
  if (value.length > 100) return false;

  const tester = /^([a-z0-9]+[.|-|_]?)*[a-z0-9]\@[a-z0-9]+(\.[a-z]+)+$/; // eslint-disable-line

  return tester.test(value);
};
