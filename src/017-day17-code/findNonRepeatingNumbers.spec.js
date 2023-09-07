import { describe, expect, it } from 'vitest';
import { findNonRepeatingNumbers } from './findNonRepeatingNumbers';

describe.skip('findNonRepeatingNumbers', () => {
  it('should return an empty array when given an empty array', () => {
    const arr = [];

    const result = findNonRepeatingNumbers(arr);

    expect(result).toEqual([]);
  });

  it('should return an array with one element when given an array with one non-repeating element', () => {
    const arr = [1];

    const result = findNonRepeatingNumbers(arr);

    expect(result).toEqual([1]);
  });

  it('should return an array with all non-repeating elements when given an array with multiple non-repeating elements', () => {
    const arr = [1, 2, 3];

    const result = findNonRepeatingNumbers(arr);

    expect(result).toEqual([1, 2, 3]);
  });

  it('should return an empty array when given an array with all repeating elements', () => {
    const arr = [1, 1, 2, 2, 3, 3];

    const result = findNonRepeatingNumbers(arr);

    expect(result).toEqual([]);
  });

  it('should return an array with non-repeating elements when given an array with both repeating and non-repeating elements', () => {
    const arr = [1, 2, 2, 3, 3, 4, 5, 5];

    const result = findNonRepeatingNumbers(arr);

    expect(result).toEqual([1, 4]);
  });
});
