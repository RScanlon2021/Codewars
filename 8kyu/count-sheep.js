// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

var countSheep = function (num) {
  if (num > 0) {
    let arr = [];
    for (let i = 1; i <= num; i++) {
      arr.push(`${i} sheep...`);
    }
    return arr.join('');
  } else {
    return '';
  }
};
