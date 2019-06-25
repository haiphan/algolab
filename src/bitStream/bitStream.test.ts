import { bitStreamProcessor } from './bitStream';

test('bitStreamProcessor should work', () => {
  const processor = bitStreamProcessor();
  expect(processor(1)).toBeFalsy();
  expect(processor(1)).toBeTruthy();
  expect(processor(1)).toBeFalsy();
  expect(processor(1)).toBeTruthy();
  expect(processor(1)).toBeFalsy();
  expect(processor(0)).toBeFalsy();
  expect(processor(0)).toBeFalsy();
  expect(processor(1)).toBeTruthy();
});
