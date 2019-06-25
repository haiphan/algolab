const genFib = (N: number): number[] => {
  const fArr = [0, 1];
  let cur = 1;
  let i = 2;
  while (cur <= N) {
    cur = fArr[i - 1] + fArr[i - 2];
    fArr.push(cur);
    i++;
  }
  const [first, sec, ...rest] = fArr;
  return rest;
};

const MAXDIST = 100000;

export const findMinJump = (arr: number[]): number => {
  arr.push(1); // last step on the bank
  const fArr = genFib(arr.length);
  const jCountArr = arr.map((i) => -1);
  // Positions reachable from starting point
  fArr.forEach((v) => {
    if (arr[v - 1] === 1) {
      jCountArr[v - 1] = 1;
    }
  });
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0 || jCountArr[i] > 0) {
      continue;
    }
    // minimum jump to reach here
    let minIndex = -1; // prev index for shortest path
    let minJHere = MAXDIST; // minimum jumps to reach here
    fArr.forEach((v) => {
      const prevIndex = i - v;
      if (prevIndex < 0) {
        return;
      }
      const prevSteps = jCountArr[prevIndex];
      if (prevSteps > 0 && minJHere > prevSteps) {
        minJHere = prevSteps;
        minIndex = prevIndex;
      }
    });
    if (minIndex > -1) {
      jCountArr[i] = minJHere + 1;
    }
  }
  return jCountArr[arr.length - 1];
};
