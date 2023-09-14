/**
 * Longest Common Subsequence
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
export function LCS(str1, str2) {
  // your code here
}

function printLCS(dp, str1, str2, i, j) {
  if (i === 0 || j === 0) {
    return '';
  }

  if (str1[i - 1] === str2[j - 1]) {
    return printLCS(dp, str1, str2, i - 1, j - 1) + str1[i - 1];
  }

  if (dp[i][j - 1] > dp[i - 1][j]) {
    return printLCS(dp, str1, str2, i, j - 1);
  }

  return printLCS(dp, str1, str2, i - 1, j);
}
