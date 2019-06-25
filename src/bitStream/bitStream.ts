/*
* 3n => (6n,0), (6n+1,1)
* 3n + 1 => (6n+2,0), (6n+3,1)
* 3n + 2 => (6n+4,0), (6n+5,1)
* To summarize
* (3n + 1 AND 1) OR (3n AND 0)
* */
export const bitStreamProcessor = () => {
  const bits = [];
  let r = 0;
  return (b: number): boolean => {
    bits.push(b);
    // Value of the array is 2 * oldValue + b
    r = r * 2 + b;
    return r % 3 === 0;
  };
};
