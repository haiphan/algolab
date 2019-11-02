import { isPalindrome } from './palindrome';

test('Should detect palindrome', () => {
  expect(isPalindrome('racecar')).toBe(true);
  expect(isPalindrome('kayak')).toBe(true);
  expect(isPalindrome('dented')).toBe(false);
});
