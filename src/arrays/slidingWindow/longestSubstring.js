/**
 * 3. Longest Substring Without Repeating Characters
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description/?envType=study-plan-v2&envId=top-interview-150
 * ---------------------------------------------------------------------
 * Given a string s, find the length of the longest
 * substring
 *  without repeating characters.
 *
 * Example 1:
 *
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 * Example 2:
 *
 * Input: s = "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 * Example 3:
 *
 * Input: s = "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 * Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 *
 *
 * Constraints:
 *
 * 0 <= s.length <= 5 * 104
 * s consists of English letters, digits, symbols and spaces.
 * ---------------------------------------------------------------------
 *  Runtime complexity: O(n)
 *  Space complexity: O(min(n,m)) - n number of characters in the input string,
 *  m number of unique characters in the input string
 *
 * @param {string} s
 * @return {number}
 */
let lengthOfLongestSubstring = function(s) {
  let left = 0;
  let right = 0;
  let mapOfChars = {};
  let result = 0;

  while (right < s.length) {
    if (mapOfChars[s[right]] !== 1) {
      mapOfChars[s[right]] = 1;
      result = Math.max(result, right - left + 1);
    }
    else {
      while (s.charAt(left) !== s.charAt(right)) {
        mapOfChars[s.charAt(left)] = mapOfChars[s.charAt(left)] - 1;
        left++;
      }

      left++;
    }
    right++;
  }

  return result;
};

let s = "abcabcbb";
console.log(lengthOfLongestSubstring(s)); // 3

s = "bbbbb"
console.log(lengthOfLongestSubstring(s)); // 1

s = "pwwkew"
console.log(lengthOfLongestSubstring(s)); // 3

s = "tmmzuxt"
console.log(lengthOfLongestSubstring(s)); // 5