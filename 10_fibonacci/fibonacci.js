function fibonacci(nth) { 
  if (nth < 0) return "OOPS";
  let sequence = [];

  for (let i = 0; i <= nth; i++) {
    if (i === 0) {
      sequence.push(0);
      sequence.push(1);
      continue;
    }

    sequence.push(sequence[i] + sequence[i-1]);
  }

  return sequence[nth];
};

// Do not edit below this line
module.exports = fibonacci;
