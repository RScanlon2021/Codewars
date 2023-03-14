//Sum all the numbers in an array

function sum(numbers) {
  'use strict';
  if (numbers.length === 0) {
    return 0;
  } else {
    return numbers.reduce((a, b) => a + b, 0);
  }
}
