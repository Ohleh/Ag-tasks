const numbers = [2, 6, 4, 5, 8, 7, 3, 6, 4, 9, 9];

console.time("time past");
for (let i = 0; i < numbers.length; i += 1) {
  for (let j = i + 1; j < numbers.length; j += 1) {
    if (numbers[i] === numbers[j]) {
      console.log("the first repeated number is", numbers[i]);
      i = numbers.length;
      console.timeEnd("time past");
      break;
    }
  }
}
