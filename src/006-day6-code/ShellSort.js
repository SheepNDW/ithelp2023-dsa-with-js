/**
 * Shell sort algorithm
 * @param {number[]} array
 */
function shellSort(array) {
  // your code here
}

/**
 * Shell sort algorithm (shell sequence)
 * @param {number[]} array
 */
function shellSort2(array) {
  // your code here
}

function getSedgewickSeq(n) {
  const array = [];
  let startup1 = 0;
  let startup2 = 2;
  for (let i = 0; i < n; i++) {
    if (i % 2 == 0) {
      array[i] = 9 * Math.pow(4, startup1) - 9 * Math.pow(2, startup1) + 1;
      startup1++;
    } else {
      array[i] = Math.pow(4, startup2) - 3 * Math.pow(2, startup2) + 1;
      startup2++;
    }
    if (array[i] >= n) {
      break;
    }
  }
  return array;
}

/**
 * Shell sort algorithm (Sedgewick sequence)
 * @param {number[]} array
 */
function shellSort3(array) {
  // your code here
}

export { shellSort, shellSort2, shellSort3 };
