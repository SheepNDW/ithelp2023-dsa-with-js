/**
 * 70. Climbing Stairs
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
  const dp = [0, 1, 2];
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}

export { climbStairs };
