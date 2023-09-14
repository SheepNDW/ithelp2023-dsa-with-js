import { describe, expect, it } from 'vitest';
import { quickSort, quickSortStack } from './QuickSort';
import { sortedArr, notSortedArr, negativeArr, negativeArrSorted } from '@/utils/sortTestUtils';

describe.skip('Quick Sort', () => {
  it('should sort array', () => {
    const array = [...notSortedArr];

    const result = quickSort(array);

    expect(result).toEqual(sortedArr);
  });

  it('should sort array with negative numbers', () => {
    const array = [...negativeArr];

    const result = quickSort(array);

    expect(result).toEqual(negativeArrSorted);
  });
});

describe.skip('QuickSort Stack', () => {
  it('should sort array', () => {
    const array = [...notSortedArr];

    const result = quickSortStack(array);

    expect(result).toEqual(sortedArr);
  });

  it('should sort array with negative numbers', () => {
    const array = [...negativeArr];

    const result = quickSortStack(array);

    expect(result).toEqual(negativeArrSorted);
  });
});
