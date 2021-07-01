{
  type Address = Readonly<{
    streetNum: number;
    town: string;
    streetName: string;
  }>;
  type User = Readonly<{
    name: string;
    email: string;
    address: Address;
  }>;

  function loginUser(user: User) {
    // perform login
  }
}

type Address = {
  streetNum: number;
  town: string;
  streetName: string;
};
type User = {
  name: string;
  email: string;
  address: Address;
};

export type UserRead = Readonly<User>;
export type UserWrite = User;

{
  type UserKind = "normal" | "visitor" | "admin";

  const errorMessageForUserViewRequestMap: PartialRecord<UserKind, string> = {
    normal: "We're having trouble Please try again in a few minutes.",

    visitor: "You do not have permissions to view this page.",
  };
  type PartialRecord<K extends keyof any, T> = {
    [P in K]?: T;
  };
}
