import {sumTwo, sumTwoUnsorted} from './sumTwo';

test('Should work', () => {
  const real = sumTwo([1,2,3,4,5], 4);
  expect(real).toBeTruthy();
  const real2 = sumTwo([1,2,3,4,5], 10);
  expect(real2).toBeFalsy();
  const real3 = sumTwoUnsorted([4,1,2,5], 6);
  expect(real3).toBeTruthy();
});
