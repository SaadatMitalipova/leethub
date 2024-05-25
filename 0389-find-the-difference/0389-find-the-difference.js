/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let a = s.split('');
    let b = t.split('');
    let obj = {};

    for (let i = 0; i < a.length; i++) {
        if (obj[a[i]]) {
            obj[a[i]]++;
        } else {
            obj[a[i]] = 1;
        }
    }

    for (let i = 0; i < b.length; i++) {
        if (obj[b[i]]) {
            obj[b[i]]--;
        } else {
            return b[i];
        }
    }

    for (let key in obj) {
        if (obj[key] === 1) {
            return key;
        }
    }
};
