import { Collection } from "immutable";
import { kebabCase } from "lodash";

{
  class User {
    constructor(
      private name: string,
      private email: string,
      private password: string
    ) {}

    generateSlug(): string {
      return kebabCase(this.name);
    }

    login(email: string, password: string) {}
    sendEmail(email: string, template: string) {}
  }

  class UserAccountService {
    login(user: User, password: string) {}
  }

  class EmailService {
    sendEmailToUser(user: User, template: string) {}
  }
}

{
  type AccountType = "Normal" | "Premium" | "Ultimate";
  class User {
    constructor(
      private name: string,
      private email: string,
      private password: string,
      private accountType: AccountType = "Normal"
    ) {}
    isPremium(): boolean {
      return this.accountType === "Premium";
    }
    getAccountType(): AccountType {
      return this.accountType;
    }
  }
  type Voucher = string;
  const userTypeToVoucherMap: Record<AccountType, Voucher> = {
    Normal: "10% discount",
    Premium: "15% discount",
    Ultimate: "20% discount",
  };
  class VoucherService {
    getVoucher(user: User): string {
      return userTypeToVoucherMap[user.getAccountType()];
    }
  }
}

{
  interface Bag<T> {
    push(item: T);
    pop(): T | undefined;
    isEmpty(): boolean;
  }

  class Queue<T> implements Bag<T> {
    constructor(private items = []) {}
    push<T>(item: T) {}
    pop(): T | undefined {
      if (this.items.length > 0) {
        return this.items.pop();
      }
      return undefined;
    }
    isEmpty(): boolean {
      return this.items.length === 0;
    }
  }

  class Stack<T> implements Bag<T> {
    constructor(private items: T[] = []) {}
    push(item: T) {}
    pop(): T | undefined {
      if (this.items.length > 0) {
        return this.items.pop();
      }
      return undefined;
    }
    isEmpty(): boolean {
      return this.items.length === 0;
    }
  }

  class NonEmptyStack<T> implements Bag<T> {
    private tag: any = Symbol();
    constructor(private items: T[] = []) {
      if (this.items.length == 0) {
        this.items.push(this.tag);
      }
    }

    push(item: T) {
      this.items.push(item);
    }
    pop(): T | undefined {
      if (this.items.length === 1) {
        const item = this.items.pop();
        this.items.push(this.tag);
        return item;
      }
      if (this.items.length > 1) {
        return this.items.pop();
      }
      return undefined;
    }
    isEmpty(): boolean {
      return this.items.length === 0;
    }
  }

  class Link {
    constructor(private start: string, end: string) {}
  }

  function visit(bag: Bag<Link>) {
    bag.push(new Link("1", "2"));
    while (!bag.isEmpty()) {
      const r = bag.pop();
    }
  }
}

{
  type User = {
    id: string;
    name: string;
    email: string;
  };
  interface UserService {
    findBy(id: string): User | undefined;
    create(specification: User): void;
    update(id: string, values: Partial<User>): void;
  }

  interface Collection<T> {
    pushBack(item: T): void;
    popBack(): T;
    pushFront(item: T): void;
    popFront(): T;
    isEmpty(): boolean;
    insertAt(item: T, index: number): void;
    deleteAt(index: number): T | undefined;
  }

  interface Collection<T> {
    isEmpty(): boolean;
  }

  interface Array<T> extends Collection<T> {
    insertAt(item: T, index: number): void;
    deleteAt(index: number): T | undefined;
  }

  interface Stack<T> extends Collection<T> {
    pushFront(item: T): void;
    popFront(): T;
  }

  interface Queue<T> extends Collection<T> {
    pushBack(item: T): void;
    popFront(): T;
  }
}

{
  type User = {
    name: string;
    email: string;
  };
  class UserService {
    constructor() {}
    findByEmail(email: string): User | undefined {
      const userRepo = UserRepositoryFactory.getInstance();
      return userRepo.findByEmail(email);
    }
  }
  class UserRepositoryFactory {
    static getInstance(): UserRepository {
      return new UserRepository();
    }
  }

  class UserRepository {
    users: User[] = [{ name: "Theo", email: "theo@example.com" }];
    findByEmail(email: string): User | undefined {
      const user = this.users.find((u) => u.email === email);
      return user;
    }
  }
}

{
  type User = {
    name: string;
    email: string;
  };
  interface UserQuery {
    findByEmail(email: string): User | undefined;
  }
  class UserService {
    constructor(
      private userQuery: UserQuery = UserRepositoryFactory.getInstance()
    ) {}
    findByEmail(email: string): User | undefined {
      return this.userQuery.findByEmail(email);
    }
  }
  class UserRepositoryFactory {
    static getInstance(): UserRepository {
      return new UserRepository();
    }
  }

  class UserRepository implements UserQuery {
    users: User[] = [{ name: "Theo", email: "theo@example.com" }];
    findByEmail(email: string): User | undefined {
      const user = this.users.find((u) => u.email === email);
      return user;
    }
  }
}
