function removeDuplicates(arr) {
  const hash = {};
  arr.forEach((el) => {
    hash['.' + el] = el; // 前面加個 "." 是為了保證順序
  });

  return Object.keys(hash).map((key) => hash[key]);
}

export { removeDuplicates };
