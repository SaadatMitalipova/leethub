/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
  let most;
  const map = {};
  const words = paragraph.toLowerCase().split(/[ !?',;.]/);
  words.forEach(w => {
    if (w && !banned.includes(w)) {
      map[w] = (map[w] || 0) + 1;
      if (!most || map[w] > map[most]) most = w;
    }
  });
  return most;
};