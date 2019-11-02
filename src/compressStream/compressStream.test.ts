import { compress } from './compressStream';

test('Should get min jump', () => {
  let arr = ['a','a','a','b','b'];
  let expected = [ 'a', '3', 'b', '2' ];
  let al = compress(arr);
  expected.forEach((c, i) => expect(c).toEqual(arr[i]));

  arr = ['a','a','a','b'];
  expected = [ 'a', '3', 'b'];
  al = compress(arr);
  expected.forEach((c, i) => expect(c).toEqual(arr[i]));

  arr = ['a','b','b','b'];
  expected = [ 'a','b','3'];
  al = compress(arr);
  expected.forEach((c, i) => expect(c).toEqual(arr[i]));

  arr = ['a','b','c','d','d'];
  expected = [ 'a','b','c','d','2'];
  al = compress(arr);
  expected.forEach((c, i) => expect(c).toEqual(arr[i]));

  arr = ['a','a','b','a','a'];
  expected = [ 'a','2','b','a','2'];
  al = compress(arr);
  expected.forEach((c, i) => expect(c).toEqual(arr[i]));

  arr = ['a','a','a','a','b'];
  expected = [ 'a','4','b'];
  al = compress(arr);
  expected.forEach((c, i) => expect(c).toEqual(arr[i]));
});
