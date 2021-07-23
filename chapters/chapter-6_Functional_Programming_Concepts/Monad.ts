import { pipe, flatten } from "ramda";
import * as A from "fp-ts/ReadonlyArray";
import { pipe as p, flow } from "fp-ts/function";
import * as O from "fp-ts/Option";
import { some } from "fp-ts/lib/ReadonlyRecord";

function add2(x: number): number {
  return x + 2;
}

function mul3(x: number): number {
  return x * 3;
}

console.log(mul3(add2(2))); // (2 + 2) * 3 = 12
console.log(add2(mul3(2))); // (2 * 3) + 2 = 8

type Optional<T> = Some<T> | None;
type None = {
  isEmpty(): true;
  map<U>(f: (value: null) => U): None;
  flatMap<U>(f: (value: null) => Optional<U>): None;
};
type Some<T> = {
  get(): T;
  isEmpty(): false;
  map(f: (value: T) => null): None;
  map<U>(f: (value: T) => U): Some<U>;
  map<U>(f: (value: T) => U): Optional<U>;

  flatMap<U>(f: (value: T) => Some<U>): Some<U>;
  flatMap<U>(f: (value: T) => None): None;
  flatMap<U>(f: (value: T) => Optional<U>): Optional<U>;
};
const None: None = {
  isEmpty: () => true,
  map: <T>(f: (value: never) => T) => None,
  flatMap: <T>(f: (value: never) => Optional<T>) => None,
};

function Some<T>(value: T): Some<T> {
  return {
    get: () => value,
    isEmpty: () => false,
    map: <U>(f: (value: T) => U) => Optional(f(value)) as any,
    flatMap: <U>(f: (value: T) => Optional<U>) => f(value) as any,
  };
}
function Optional<T>(value: T): Some<T>;
function Optional<T>(value: null): None;
function Optional<T>(value: T | null) {
  if (value === null) {
    return None;
  }
  return Some(value);
}

Optional(3).isEmpty(); // false
Optional(null).isEmpty(); // true
Optional(3).get(); // 3

type UserType = {
  id: number;
  name: Optional<string>;
  friends: ReadonlyArray<UserType>;
};
const userA: UserType = {
  id: 2,
  name: Optional("Alex"),
  friends: [
    {
      id: 3,
      name: Optional("Mike"),
      friends: [
        {
          id: 4,
          name: Optional("Georgie"),
          friends: [],
        },
      ],
    },
  ],
};

const getFriends = (user: UserType): ReadonlyArray<UserType> => user.friends;
const getName = (user: UserType): Optional<string> => user.name;
const friendsOfFriends = flatten(getFriends(userA).map(getFriends));

const userName = Optional(userA).flatMap(getName);
console.log(userName.isEmpty()); // false
console.log((userName as Some<string>).get());
const evens = (n: number): O.Option<number> =>
  n % 2 === 0 ? O.none : O.some(n);
