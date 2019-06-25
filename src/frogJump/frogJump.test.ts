import { findMinJump } from './frogJump';

test('findMinJump should work', () => {
  const real = findMinJump([1, 1, 1, 1, 1]);
  expect(real).toEqual(4);

  const real2 = findMinJump([2,3,1,1,2,4,2,0,1,1]);
  expect(real2).toEqual(4);
});
