export const translateDate = (date: Date): string => {
  const _date = new Date(date);

  const [usDate] = _date.toISOString().split('T');

  return usDate.split('-').reverse().join('/');
};
