export const isPalindrome = (str: string, start = 0): boolean => {
  const sLen = str.length;
  const end = sLen - start - 1;
  if (start >= end) {
    return true;
  }
  return str[start] === str[end] ? isPalindrome(str, start + 1) : false;
};
