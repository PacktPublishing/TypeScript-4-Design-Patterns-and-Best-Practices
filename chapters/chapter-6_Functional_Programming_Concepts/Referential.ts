import { IO, log } from "./PureFunctions";
import * as R from "ramda";

function main(): IO<(a, b) => void> {
  return R.compose(log, sumList, getArgs)(11, 4);
}
function sumList(number: []): number {
  return number.reduce((prev, curr) => prev + curr, 0);
}

function getArgs(a: number, b: number): number[] {
  return [a, b];
}

console.log(main()());
