import { Hash } from './chaining/Hash';

function twoSum(numbers, target) {
  const hash = new Hash();
  for (let i = 0; i < numbers.length; i++) {
    const el = numbers[i] + '';
    if (hash.get(el) !== null) {
      const index = hash.get(el);
      return [index, i];
    }
    hash.insert(target - el + '', i); // 在我們的實作中 key 要是字串
  }
}

export { twoSum };
