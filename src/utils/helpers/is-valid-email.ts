export const isValidEmail = (value: string): boolean => {
  if (value.length > 100) return false;

  const tester = /^([a-zA-Z0-9]+[.|\-|_]?)*[a-zA-Z0-9]\@[a-zA-Z0-9]+(\.[a-zA-Z]+)+$/; // eslint-disable-line

  return tester.test(value);
};
