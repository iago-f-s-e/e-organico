export const translateDate = (date: string | Date): string => {
  const _date = new Date(date);

  const [usDate] = _date.toISOString().split('T');

  return usDate.split('-').reverse().join('/');
};
