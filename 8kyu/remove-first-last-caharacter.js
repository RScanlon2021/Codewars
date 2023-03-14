// Remove first and last character in a string

function removeChar(str) {
  return str.length > 2 ? str.slice(1, -1) : '';
}
