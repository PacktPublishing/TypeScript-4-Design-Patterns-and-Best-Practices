export class UsersAPISingleton {
  private static instance: UsersAPISingleton;
  private constructor() {}
  static getInstance() {
    if (!UsersAPISingleton.instance) {
      UsersAPISingleton.instance = new UsersAPISingleton();
    }

    return UsersAPISingleton.instance;
  }

  getUsers(): Promise<string[]> {
    return Promise.resolve(["Alex", "John", "Sarah"]);
  }
}

const usersPromise = UsersAPISingleton.getInstance().getUsers();
usersPromise.then((res) => {
  console.log(res);
});

UsersAPISingleton.getInstance("/v1/users").getUsers();
UsersAPISingleton.getInstance("/v2/users").getUsers();

UsersAPISingleton.getInstance("/v1/users") ===
  UsersAPISingleton.getInstance("/v1/users");
UsersAPISingleton.getInstance("/v1/users") !==
  UsersAPISingleton.getInstance("/v2/users");
