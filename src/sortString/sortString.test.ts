import { sortStringFast, sortStringNormal } from './sortString';

test('Queue should work', () => {
  const str = 'abcdfegb';
  const pat = 'bkdpsc';
  expect(sortStringNormal(str, pat)).toEqual('bbdcafeg');
  expect(sortStringFast(str, pat)).toEqual('bbdcafeg');
  const str2 = 'abcd';
  const pat2 = 'cba';
  expect(sortStringFast(str2, pat2)).toEqual('cbad');
});
