/**
 * Prime Ring Problem
 * @param {number} n - 0 < n <= 16
 * @return {number} - the number of prime rings
 */
function getPrimeCircle(n) {
  // your code here
}

const primes = {
  2: true,
  3: true,
};
function isPrime(k) {
  const n = Math.sqrt(k);

  if (primes[k] !== undefined) {
    return primes[k];
  }

  if (k % 2 === 0) {
    return (primes[k] = false);
  }

  for (let i = 3; i <= n; i++) {
    if (k % i === 0) {
      return (primes[k] = false);
    }
  }

  return (primes[k] = true);
}

export { getPrimeCircle };
