import { describe, expect, it } from 'vitest';
import { bubbleSort3 } from '@/day17-bubble-sort/BubbleSort';
import { shellSort } from '@/day19-shell-sort/ShellSort';
import { mergeSort2, mergeSortObject, mergeSortObject2, mergeSortSimple } from './MergeSort';
import {
  sortedArr,
  notSortedArr,
  negativeArr,
  negativeArrSorted,
  testRuntime,
} from '@/utils/sortTestUtils';

const runTest = (sortFunction, input, output) => {
  const array = [...input];
  const result = sortFunction(array);
  expect(result).toEqual(output);
};

const sortFunctions = [mergeSortObject, mergeSortObject2, mergeSortSimple, mergeSort2];

sortFunctions.forEach((sortFunction) => {
  describe.skip(`${sortFunction.name}`, () => {
    it('should sort array', () => {
      runTest(sortFunction, notSortedArr, sortedArr);
    });

    it('should sort array with negative numbers', () => {
      runTest(sortFunction, negativeArr, negativeArrSorted);
    });
  });
});

describe.skip('test runtime', () => {
  it('compare with bubble sort and shell sort', () => {
    testRuntime(bubbleSort3);
    testRuntime(shellSort);
    testRuntime(mergeSortObject);
    testRuntime(mergeSortObject2);
    testRuntime(mergeSortSimple);
    testRuntime(mergeSort2);
  });
});
