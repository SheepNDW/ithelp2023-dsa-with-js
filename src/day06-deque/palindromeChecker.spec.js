import { describe, expect, it } from 'vitest';
import { palindromeChecker } from './palindromeChecker';

describe.skip('palindromeChecker', () => {
  it('should return true if the string is palindrome', () => {
    const str = 'abcba';
    const str2 = 'never odd or even';
    const str3 = '假似真時真似假';

    const result = palindromeChecker(str);
    const result2 = palindromeChecker(str2);
    const result3 = palindromeChecker(str3);

    expect(result).toBe(true);
    expect(result2).toBe(true);
    expect(result3).toBe(true);
  });
  it('should return false if the string is not palindrome', () => {
    const str = 'abcdba';

    const result = palindromeChecker(str);

    expect(result).toBe(false);
  });
  it('should return true if the string is empty', () => {
    const str = '';

    const result = palindromeChecker(str);

    expect(result).toBe(true);
  });
});
