import { findMinJump } from './fibFrog';

// fib 0,1,1,2,3,5
test('Should get min jump', () => {
  let arr = [0,1,0,0,1];
  expect(findMinJump(arr)).toEqual(2);
  arr = [0,0,1,1,0,1,0,0,0,0,0];
  expect(findMinJump(arr)).toEqual(3);
  arr = [0,0,0];
  expect(findMinJump(arr)).toEqual(-1);
});
