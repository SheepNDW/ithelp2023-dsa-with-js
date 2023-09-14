import { describe, expect, it } from 'vitest';
import { removeDuplicates } from './removeDuplicates';

describe.skip('removeDuplicates', () => {
  it('should remove duplicates from an array', () => {
    const arr = [1, 2, 2, 3, 3, 3];
    const expected = [1, 2, 3];

    const result = removeDuplicates(arr);

    expect(result).toEqual(expected);
  });

  it('should handle an empty array', () => {
    const arr = [];
    const expected = [];

    const result = removeDuplicates(arr);

    expect(result).toEqual(expected);
  });

  it('should handle an array with no duplicates', () => {
    const arr = [1, 2, 3];
    const expected = [1, 2, 3];

    const result = removeDuplicates(arr);

    expect(result).toEqual(expected);
  });
});
