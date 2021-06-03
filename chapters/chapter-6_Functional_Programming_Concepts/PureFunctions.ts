function add1(num: number): number {
  return num + 1;
}

console.log(add1(1)); // 2
console.log(add1(1)); // 2

function printNumber(num: number): void {
  console.log(num);
}

function toZero(num: number): 0 {
  return 0;
}

export interface IO<A> {
  (): A;
}

export const log =
  (s: unknown): IO<void> =>
  () =>
    console.log(s);
const now: IO<string> = () => new Date().toISOString();

log("Hello")();
console.log(now());
