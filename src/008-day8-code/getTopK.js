/**
 * find the top k smallest elements in an array
 * @param {number[]} array
 * @param {number} k
 * @return {number[]}
 */
function getTopK(array, k) {
  // your code here
}

function partition(array, left, right) {
  const pivot = array[right];
  while (left < right) {
    while (left < right && array[left] <= pivot) {
      left++;
    }
    array[right] = array[left];
    while (left < right && array[right] >= pivot) {
      right--;
    }
    array[left] = array[right];
  }
  array[right] = pivot;
  return left;
}

export { getTopK };
