export const findMinJump = (arr: number[]): number => {
  const N = arr.length;
  const minArr = arr.map((n, i) => i === 0 ? 0 : null);
  for (let i = 1; i < N; i++) {
    for (let j = 0; j < i; j++) {
      if (i <= arr[j] + j) {
        // if i is reachable from j, we add the steps to reach j with one to get the steps to reach i
        minArr[i] = Math.min(minArr[i] || N, minArr[j] + 1);
      }
    }
  }
  return minArr[N - 1];
};
