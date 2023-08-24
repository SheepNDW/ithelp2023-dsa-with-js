/**
 * Counting sort algorithm
 * @param {number[]} array
 */
function countSort(array) {
  const n = array.length;
  let max = array[0];
  let min = array[0];
  for (let i = 1; i < n; i++) {
    if (max < array[i]) max = array[i];
    if (min > array[i]) min = array[i];
  }
  const size = max - min + 1;
  const buckets = new Array(size).fill(0);
  // 遍歷所有 bucket
  for (let i = 0; i < n; i++) {
    buckets[array[i] - min]++;
  }
  for (let i = 1; i < size; i++) {
    // 累加前面所有 bucket 的值
    buckets[i] += buckets[i - 1];
  }
  const result = new Array(n); // 逆向遍歷原陣列（保證穩定性）
  for (let i = n - 1; i >= 0; i--) {
    result[--buckets[array[i] - min]] = array[i];
  }
  return result;
}

export { countSort };
