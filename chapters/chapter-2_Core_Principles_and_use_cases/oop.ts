interface RestApiClient<T> {
  getAll(): Promise<T[]>;
  getOne(id: string): Promise<T>;
}

interface Site {
  name: string;
}

class SitesApiClient implements RestApiClient<Site> {
  getAll() {
    const res: Site[] = [{ name: "website1" }];
    return Promise.resolve(res);
  }
  getOne(id: string) {
    return Promise.resolve({ name: "website1" });
  }
}

class EventAction {
  trigger(delay: number = 0) {
    console.log(`Event triggered in ${delay}s.`);
  }
}
class NotificationEvent extends EventAction {
  sendEmail() {
    console.log("Sending Email");
  }
}
const ev = new NotificationEvent();
ev.trigger();
ev.sendEmail();
ev.trigger(10);

class A {
  constructor() {
    this.subClassCheck();
  }

  private subClassCheck(): never | void {
    if (Object.getPrototypeOf(this) !== A.prototype) {
      throw new Error("Cannot extend this class.");
    }
  }
}

class B extends A {}

let a = new A(); // OK
// let b = new B(); // fail

class User {
  #name: string;

  constructor(name: string) {
    this.#name = name;
  }

  greet() {
    console.log(`User: ${this.#name}!`);
  }
}

const theo = new User("Theo");
// theo.#name; // cannot access private field

class Component {
  onInit(): void {
    console.log("Called from Component");
  }
}

class ReactComponent extends Component {
  onInit(): void {
    super.onInit();
    console.log("Called from React Component");
  }
}

const c = new ReactComponent();
c.onInit(); // logs "Called from React Component"
