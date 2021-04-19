export type PartialRecord<K extends keyof any, T> = {
  [P in K]?: T;
};

interface SignupFormState {
  email: string;
  name: string;
}

interface ActionPayload {
  key: keyof SignupFormState;
  value: string;
}

const update1: ActionPayload = {
  key: "email",
  value: "hello@gmail.com",
};

type actionPayloadKeys = keyof typeof update1;

type Point2d = { x: number; y: number };

type NominalTyped<Type, Brand> = Type & { __type: Brand };

type Point3d = NominalTyped<Point2d & { z: number }, Point2d>;

function distance1(first: Point2d, second: Point2d) {
  return Math.sqrt(
    Math.pow(first.x - second.x, 2) + Math.pow(first.y - second.y, 2)
  );
}
distance1({ x: 1, y: 2 }, { x: 3, y: 4 });

function distance2(
  first: NominalTyped<Point2d, "Point2d">,
  second: NominalTyped<Point2d, "Point2d">
) {
  return Math.sqrt(
    Math.pow(first.x - second.x, 2) + Math.pow(first.y - second.y, 2)
  );
}

class User {
  private static readonly __type: unique symbol = Symbol();
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
type Account = {
  name: string;
};
function printAccountName(o: User) {
  console.log(o.name);
}
printAccountName(new User("Theo"));
// printAccountName({name: "Alex"}) // Fail to typecheck

type PPSNumber = {
  number: string;
};
type NameOrPPSNumber<T extends string | number> = T extends number
  ? PPSNumber
  : string;

const loginInfo: NameOrPPSNumber<1> = {
  number: "123",
};

interface Box<T> {
  value: T;
}

type UnpackBox<A> = A extends Box<infer E> ? E : A;

type intStash = UnpackBox<{ value: 10 }>;
type stringStash = UnpackBox<{ value: "123" }>;
type booleanStash = UnpackBox<true>;
