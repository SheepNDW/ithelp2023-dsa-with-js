/**
 * Bucket sort algorithm
 * @param {number[]} array
 * @param {number} bucketSize
 */
function bucketSort(array, bucketSize = 3) {
  if (array <= 1) {
    return array;
  }
  const n = array.length;
  const min = Math.min(...array);
  const max = Math.max(...array);
  if (min === max) {
    return array;
  }
  const capacity = (max - min + 1) / bucketSize;
  const buckets = new Array(max - min + 1);
  for (let i = 0; i < n; i++) {
    const el = array[i];
    const bucketIndex = Math.floor((el - min) / capacity);
    const bucket = buckets[bucketIndex];
    if (bucket) {
      let jn = bucket.length;
      if (el >= bucket[jn - 1]) {
        bucket[jn] = el;
      } else {
        insertSort: for (let j = 0; j < jn; j++) {
          if (bucket[j] > el) {
            while (jn > j) {
              // 全部向後挪一位
              bucket[jn] = bucket[jn - 1];
              jn--;
            }
            bucket[j] = el; // 讓 el 佔據 bucket[j] 的位置
            break insertSort;
          }
        }
      }
    } else {
      buckets[bucketIndex] = [el];
    }
  }
  let index = 0;
  for (let i = 0; i < bucketSize; i++) {
    const bucket = buckets[i];
    for (let k = 0; k < bucket.length; k++) {
      array[index++] = bucket[k];
    }
  }
  return array;
}

export { bucketSort };
