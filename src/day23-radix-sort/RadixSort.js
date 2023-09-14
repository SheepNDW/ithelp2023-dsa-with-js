/**
 * LSD Radix sort algorithm
 * @param {number[]} array
 */
function radixSort(array) {
  // your code here
}

/**
 * 根據某個位數上的值得到桶子的編號
 * @param {number} num
 * @param {number} i
 */
function getBucketNumber(num, i) {
  return Math.floor((num / Math.pow(10, i - 1)) % 10);
}

/**
 * 獲取數字的位數
 * @param {number} num
 */
function getLoopTimes(num) {
  let digits = 0;
  while (num) {
    digits++;
    num = Math.floor(num / 10);
  }
  return digits;
}

/**
 * LSD 排序
 * @param {number[]} array
 * @param {number[][]} buckets
 * @param {number} len
 * @param {number} radix
 */
function lsdRadixSort(array, buckets, len, radix) {
  // your code here
}

/**
 * MSD Radix sort algorithm
 * @param {number[]} array
 */
function radixSort2(array) {
  // your code here
}

function msdRadixSort(array, len, radix) {
  // your code here
}

export { radixSort, radixSort2 };
