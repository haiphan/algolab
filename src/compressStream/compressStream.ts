// newarr = ar.slice(1, 3 + 1);
// from 1 to 3

type BoolOrSRType = boolean | null | string[];

const streamProcessor = () => {
  let count = 0;
  let cur = null;

  return (c, isEnd = false): BoolOrSRType => {
    let res: BoolOrSRType = false;
    if (!cur || cur !== c || isEnd) {
      const oldCount = count;
      cur = c;
      count = 1;
      res = oldCount === 0 ?
        false :
        (oldCount === 1 ? null : oldCount.toString().split(''));
    } else {
      count++;
    }
    return res;
  };
};

export const compressHelp = (arr: string[]): string[] => {
  const processor = streamProcessor();
  let i = 0;
  let begin = 0;
  while (true) {
    const res = processor(arr[i], i >= arr.length);
    if (!res) {
      begin = res === null ? i : begin;
      i++;
      continue;
    }
    arr = [
      ...arr.slice(0, begin + 1),
      ...res as string[],
      ...arr.slice(i, arr.length)
    ];
    i = begin + (res as string[]).length + 2;
    if (arr[i] === undefined) {
      break;
    }
    begin = i - 1;
  }
  return arr;
};

export const compress = (arr: string[]): number => {
  const resArr = compressHelp(arr);
  for (let i = 0; i < arr.length; i++) {
    if (i < resArr.length) {
      arr[i] = resArr[i];
    } else {
      arr[i] = '';
    }
  }
  return resArr.length;
};
