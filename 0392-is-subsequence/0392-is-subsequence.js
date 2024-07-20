/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let a = 0;
    let b = 0;

    while (a < s.length && b < t.length) {
        if (s[a] === t[b]) {
            a++;
        }
        b++;
    }

    return a === s.length;    
};