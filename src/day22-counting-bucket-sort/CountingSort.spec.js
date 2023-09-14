import { describe, expect, it } from 'vitest';
import { countSort } from './CountingSort';
import { sortedArr, notSortedArr, negativeArr, negativeArrSorted } from '@/utils/sortTestUtils';

describe.skip('Counting Sort', () => {
  it('should sort array', () => {
    const array = [...notSortedArr];

    const result = countSort(array);

    expect(result).toEqual(sortedArr);
  });

  it('should sort array with negative numbers', () => {
    const array = [...negativeArr];

    const result = countSort(array);

    expect(result).toEqual(negativeArrSorted);
  });
});
