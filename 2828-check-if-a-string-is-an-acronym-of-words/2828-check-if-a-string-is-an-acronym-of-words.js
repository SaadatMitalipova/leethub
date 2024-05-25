/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
const isAcronym = (a, t) => {
   let res = "";
   for(const s of a) res += s[0];
   return res == t;
};