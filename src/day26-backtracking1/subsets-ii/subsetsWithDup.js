/**
 * 90. Subsets II
 * @link https://leetcode.com/problems/subsets-ii/
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsetsWithDup(nums) {
  // your code here
}

// ==== 在 for 迴圈中去重 ====
// function backtrack(start) {
//   result.push([...candidate]);
//   for (let i = start; i < end; i++) {
//     if (i > start && nums[i] === nums[i - 1]) {
//       continue;
//     }
//     candidate.push(nums[i]);
//     backtrack(i + 1);
//     candidate.pop();
//   }
// }
export { subsetsWithDup };
