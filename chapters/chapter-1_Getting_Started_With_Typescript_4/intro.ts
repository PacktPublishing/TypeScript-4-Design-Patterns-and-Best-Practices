const one: string = "one";
const two: boolean = false;
const three: number = 3;
const four: null = null;
const five: unknown = 5;
const six: any = 6;
const seven: unique symbol = Symbol("seven");
let eight: never; // note that const eight: never cannot happen as we cannot instantiate a never
let nine: bigint = BigInt(8);

enum Keys {
  Up,
  Down,
  Left,
  Right,
}
let up: Keys = Keys.Up;

const enum Bool {
  True,
  False,
}

let truth: Bool = Bool.True;

const arr: number[] = [1, 2, 3];
const tup: [number] = [1];

class User {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

const user = new User("Theo");
console.log(user.getName());

abstract class BaseApiClient {
  abstract fetch(req: any): Promise<any>; // must be implemented in sub-classes
}

class UsersClient extends BaseApiClient {
  fetch(req: any): Promise<any> {
    return Promise.resolve([]);
  }
}

const client = new UsersClient();
client.fetch({ url: "/users" });

interface Comparable<T> {
  compareTo(o: T): number;
}

interface AppConfig {
  paths: {
    base: string;
  };
  maxRetryCount?: number;
}

const appConfig: AppConfig = {
  paths: {
    base: "/",
  },
};

type A = "A";
type B = "B";

type C = A & B; // type is never
type D = C | "E"; // type is "E"
type E = {
  name: string;
};

type F = E & {
  age: number;
};

let e: F = {
  name: "Theo",
  age: 20,
};
