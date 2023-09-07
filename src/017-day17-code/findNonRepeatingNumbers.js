function findNonRepeatingNumbers(arr) {
  const hash = {};
  arr.forEach((el) => {
    if (hash[el]) {
      hash[el].count++;
    } else {
      hash[el] = {
        count: 1,
        data: el,
      };
    }
  });

  const result = [];
  Object.keys(hash).forEach((key) => {
    if (hash[key].count === 1) {
      result.push(hash[key].data);
    }
  });

  return result;
}

export { findNonRepeatingNumbers };
