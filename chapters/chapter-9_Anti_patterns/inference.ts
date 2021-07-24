import { values } from "ramda";

const arr = [1, 2, 3];
let x;
x = 2;

function example(param: { value: string } = { value: "a" }) {
  return param;
}

const param = {
  value: "a",
};
example(param);

import fetch from "node-fetch";

fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(async (res) => {
    return mapUser(await res.json());
  })
  .then((res) => {
    console.log(res);
  });

type UserResponse = {
  id: string;
  name: string;
  username: string;
};

function mapJsonResponse(json: any): UserResponse[] {
  const result: UserResponse[] = [];
  for (let item of json) {
    result.push({
      id: item["id"] ?? null,
      name: item["name"] ?? null,
      username: item["username"] ?? null,
    });
  }
  return result;
}

function mapUser(user: any) {
  return {
    id: user["id"] ?? null,
    name: user["name"] ?? null,
    username: user["username"] ?? null,
  };
}
