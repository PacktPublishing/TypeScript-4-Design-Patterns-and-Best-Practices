function factorial(num: number): number {
  if (num < 0) return -1;
  else if (num == 0) return 1;
  else {
    return num * factorial(num - 1);
  }
}

function sum(numbers: number[]): number {
  function recur(numbers: number[], currentSum: number): number {
    if (numbers.length === 0) {
      return currentSum;
    }
    let [first, ...rest] = numbers;
    return recur(rest, currentSum + first);
  }

  return recur(numbers, 0);
}

console.log(sum([1, 2, 3, 4, 5])); // 15

function factorialTail(num: number, result: number = 1): number {
  if (num === 0) {
    return result;
  }
  return factorialTail(num - 1, num * result);
}
