import { swap } from '@/utils/sortTestUtils';

/**
 * Quick sort algorithm
 * @param {number[]} array
 */
function quickSort(array) {
  // your code here
}

/**
 * Quick sort algorithm (stack version)
 * @param {number[]} array
 */
function quickSortStack(array) {
  // your code here
}

/**
 * get median of three
 * @param {number[]} array
 * @param {number} left
 * @param {number} right
 */
function getMid(array, left, right) {
  // your code here
}

/**
 * Partition array (左右指標法)
 * @param {number[]} array - array to partition
 * @param {number} left - left index
 * @param {number} right - right index
 * @returns {number} index of pivot
 */
function partition(array, left, right) {
  // your code here
}

/**
 * Partition array (挖坑法)
 * @param {number[]} array - array to partition
 * @param {number} left - left index
 * @param {number} right - right index
 * @returns {number} index of pivot
 */
function partition2(array, left, right) {
  // your code here
}

/**
 * Partition array (前後指標法)
 * @param {number[]} array - array to partition
 * @param {number} left - left index
 * @param {number} right - right index
 * @returns {number} index of pivot
 */
function partition3(array, left, right) {
  // your code here
}

export { quickSort, quickSortStack, partition, partition2, partition3 };
