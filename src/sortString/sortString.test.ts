import { sortStringNormal } from './sortString';

test('Queue should work', () => {
  const str = 'abcdfegb';
  const pat = 'bkdpsc';
  expect(sortStringNormal(str, pat)).toEqual('bbdcafeg');
});
