const mod = function (a: number, b: number): number {
  return a % b;
};

function calculateMod(
  a: number,
  b: number,
  modFun: (a: number, b: number) => number
): number {
  return modFun(a, b);
}
console.log(calculateMod(10, 3, mod)); // 1

function mulByTwo(a: number): () => number {
  return () => {
    return a * 2;
  };
}

mulByTwo(4)(); // 8
