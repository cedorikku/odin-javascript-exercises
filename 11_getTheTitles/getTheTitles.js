const getTheTitles = function(books) {
  return books.reduce((obj, book, index) => {
    obj[index] = book.title;
    return obj;
  }
  , [])
};

// Do not edit below this line
module.exports = getTheTitles;
