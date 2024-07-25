const palindromes = function (string) {
  const alphanumerical = "thequickbrownfoxjumpsoverthelazydog0123456789"

  const cleanString = string
    .toLowerCase()
    .split('')
    .filter((character) => alphanumerical.includes(character))
    .join('');

  const reverseString = cleanString.split('').reverse().join('');
  return reverseString === cleanString;
  };

// Do not edit below this line
module.exports = palindromes;
