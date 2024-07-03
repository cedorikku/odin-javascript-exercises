const reverseString = function(msg) {
  const length = msg.length;
  let reversedArray = [];
  let reversed = '';
  
  for (let i = length - 1; i >= 0; i--) {
    reversedArray.push(msg.charAt(i));
  }

  for (const c of reversedArray) {
    reversed += c;
  }

  return reversed;
};

// Do not edit below this line
module.exports = reverseString;
