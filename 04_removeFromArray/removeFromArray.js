const removeFromArray = function(arr, ...args) {
 
  let newArray = arr;
  for (let arg of args) {
    newArray = newArray.filter(x => {
      return x !== arg;
    });
  }

  return newArray;
};

// let myArray = removeFromArray([1,2,3,4], 1, 2);
// console.log(myArray);

// Do not edit below this line
module.exports = removeFromArray;
