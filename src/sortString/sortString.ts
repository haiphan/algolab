const customSort = (a: string, b: string, pattern: string): number => {
  const order = pattern.split('');
  const aIndex = order.indexOf(a);
  const bIndex = order.indexOf(b);
  if (aIndex < 0 && bIndex < 0) {
    return 0;
  }
  if (aIndex < 0 && bIndex >= 0) {
    return 1;
  }
  if (aIndex >= 0 && bIndex < 0) {
    return -1;
  }
  if (aIndex === bIndex) {
    return 0;
  }
  if (aIndex < bIndex) {
    return -1;
  }
  return 1;
};

export const sortStringNormal = (sToSort, pattern): string => {
  const arr = sToSort.split('');
  arr.sort((a, b) => customSort(a, b, pattern));
  return arr.join('');
};
