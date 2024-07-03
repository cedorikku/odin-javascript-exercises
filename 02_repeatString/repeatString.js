const repeatString = function(msg, count) {
  if (count < 0) return 'ERROR';

  let message = '';
  for (let i = 0; i < count; i++) {
    message += msg;
  }
  return message;
};

// Do not edit below this line
module.exports = repeatString;
