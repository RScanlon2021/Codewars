function reverseWords(str) {
  // break down and add all words in a string, separated by a space, to an array
  const words = str.split(' ');
  //map over each value in the words array splitting each character in each word, reversing them,
  //joining the characters, then joining the elements of the array into a sentence separated by a space
  return words.map((word) => word.split('').reverse().join('')).join(' ');
}
