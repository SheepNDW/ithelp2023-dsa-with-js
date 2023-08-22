import { describe, expect, it } from 'vitest';
import { bubbleSort1, bubbleSort2, bubbleSort3, cocktailSort } from './BubbleSort';
import {
  sortedArr,
  notSortedArr,
  negativeArr,
  negativeArrSorted,
  testRuntime,
} from '../utils/sortTestUtils';

describe.skip('Bubble Sort Algorithm', () => {
  describe('Bubble Sort 1', () => {
    it('should sort array', () => {
      const array = [...notSortedArr];

      bubbleSort1(array);

      expect(array).toEqual(sortedArr);
    });

    it('should sort array with negative numbers', () => {
      const array = [...negativeArr];

      bubbleSort1(array);

      expect(array).toEqual(negativeArrSorted);
    });
  });

  describe('Bubble Sort 2', () => {
    it('should sort array', () => {
      const array = [...notSortedArr];

      bubbleSort2(array);

      expect(array).toEqual(sortedArr);
    });

    it('should sort array with negative numbers', () => {
      const array = [...negativeArr];

      bubbleSort2(array);

      expect(array).toEqual(negativeArrSorted);
    });
  });

  describe('Bubble Sort 3', () => {
    it('should sort array', () => {
      const array = [...notSortedArr];

      bubbleSort3(array);

      expect(array).toEqual(sortedArr);
    });

    it('should sort array with negative numbers', () => {
      const array = [...negativeArr];

      bubbleSort3(array);

      expect(array).toEqual(negativeArrSorted);
    });
  });

  describe('Cocktail Sort', () => {
    it('should sort array', () => {
      const array = [...notSortedArr];

      cocktailSort(array);

      expect(array).toEqual(sortedArr);
    });

    it('should sort array with negative numbers', () => {
      const array = [...negativeArr];

      cocktailSort(array);

      expect(array).toEqual(negativeArrSorted);
    });
  });
});

describe.skip('Test Optimized Bubble Sort runtime', () => {
  it('測試三種 bubble sort 耗時', () => {
    testRuntime(bubbleSort1);
    testRuntime(bubbleSort2);
    testRuntime(bubbleSort3);
    testRuntime(cocktailSort);
  });
});
