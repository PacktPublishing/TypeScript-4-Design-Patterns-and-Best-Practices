import * as R from "ramda";

function toLowerCase(input: string): string {
  return input.toLocaleLowerCase();
}

function substring(input: string, index: number): string {
  return input.substr(0, index);
}

function partitionAt(input: string, index: number): [string, string?] {
  if (index < 0 || index > input.length) {
    return [input];
  }
  return [input.substr(0, index), input.substr(index)];
}

console.log(partitionAt(toLowerCase("aAJu234AA*AUHF"), 4));
// toLowerCase(partitionAt("aAJu234AA*AUHF"), 4) // return type does not match with input type

const add = (a: number, b: number) => a + b;
// const add = (a: number) => (b: number) => a + b;

const addTwoNumbers = (a: number, b: number) => a + b;

const addTwoNumbersC = R.curry(addTwoNumbers);
const f = addTwoNumbersC(4);
console.log(f(3)); //7

const message = R.compose(toLowerCase, substring);

console.log(message("aAJu234AA*AUHF", 4));

function sortList(list: number[]): number[] {
  list.sort();
  return list;
}
let list = [42, 1, 4, 5];
let l = [...sortList(list)];
let m = [...list];
console.log(l);
console.log(m);
