/**
 * https://leetcode.com/problems/determine-if-two-strings-are-close
 */
/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  const normalize = (char) => char.codePointAt(0) - "a".codePointAt(0);

  // console.log(word1, word2);

  let kind1 = new Array(26).fill(0);
  let kind2 = new Array(26).fill(0);

  for (const char of word1) {
    kind1[normalize(char)] += 1;
  }
  for (const char of word2) {
    kind2[normalize(char)] += 1;
  }

  for (let i = 0; i < 26; ++i) {
    if ((kind1[i] === 0 && kind2[i] > 0) || (kind1[i] > 0 && kind2[i] === 0)) {
      return false;
    }
  }

  kind1.sort((a, b) => a - b);
  kind2.sort((a, b) => a - b);
  for (let i = 0; i < 26; ++i) {
    if (kind1[i] !== kind2[i]) {
      return false;
    }
  }

  return true;
};

console.log(closeStrings("abc", "cba"));
console.log(closeStrings("abcd", "cbab"));
console.log(closeStrings("abbcccdddd", "dccbbbaaaa"));
console.log(closeStrings("a", "aa"));
console.log(closeStrings("cabbba", "abbccc"));
