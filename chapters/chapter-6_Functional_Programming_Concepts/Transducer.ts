import * as R from "ramda";

const collection = [1, 2, 3, 4, 5];

function addReducer(curr: number, acc: number): number {
  return curr + acc;
}

console.log(collection.reduce(addReducer, 0));
console.log(collection.filter((n: number) => (n & 1) === 1).reduce(addReducer));

type Transducer<T, K> = (reducerFn: Reducer<any, T>) => Reducer<any, K>;
type Reducer<T, K> = () => T | ((acc: T) => T) | ((acc: T, curr: K) => T);

const transducer = R.compose(R.map(R.add(1)));
const result = R.transduce(
  transducer,
  R.flip<number, readonly number[], number[]>(R.append),
  [],
  collection
);
console.log(result); // [2, 3, 4, 5, 6]
