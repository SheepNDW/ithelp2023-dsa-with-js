import { Deque } from './Deque';

/**
 * check if the string is palindrome
 * @param {string} str
 * @return {boolean}
 * @example
 * palindromeChecker('abcba') // true
 * palindromeChecker('abcdba') // false
 * palindromeChecker('') // true
 */
function palindromeChecker(str) {
  const lowerStr = str.toLocaleLowerCase().split(' ').join('');

  const deque = new Deque();

  for (let i = 0; i < lowerStr.length; i++) {
    deque.addBack(lowerStr[i]);
  }

  while (deque.size() > 1) {
    if (deque.removeFront() !== deque.removeBack()) {
      return false;
    }
  }

  return true;
}

export { palindromeChecker };
