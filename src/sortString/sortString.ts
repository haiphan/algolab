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

// O(N) time, using hash map
export const sortStringFast = (sToSort, pattern): string => {
  const arr = sToSort.split('');
  // number of occurrence of each char
  const charCount = arr.reduce((acc, c) => {
    return {
      ...acc,
      [c]: (acc[c] || 0) + 1
    };
  }, {});
  // Go through the pattern and add those letters with exact frequencies
  const  firstPart = pattern.split('').reduce((acc, c) => {
    const pad = c.repeat(charCount[c] || 0);
    delete charCount[c];
    return `${acc}${pad}`;
  }, '');
  const secondPart = Object.keys(charCount).reduce((acc, c) => {
    const pad = c.repeat(charCount[c]);
    return `${acc}${pad}`;
  }, '');
  return `${firstPart}${secondPart}`;
};
