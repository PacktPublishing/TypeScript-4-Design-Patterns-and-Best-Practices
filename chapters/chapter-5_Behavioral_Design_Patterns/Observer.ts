interface Subscriber {
  notify(): void;
}

export abstract class Subject {
  private subscribers: Subscriber[] = [];

  public addSubscriber(s: Subscriber): void {
    this.subscribers.push(s);
  }

  public removeSubscriber(s: Subscriber): void {
    var n: number = this.subscribers.indexOf(s);
    this.subscribers.splice(n, 1);
  }

  public notify(): void {
    console.log("notifying all the subscriber list");
    for (let s of this.subscribers) {
      s.notify();
    }
  }
}

export class ConcreteSubject extends Subject {
  private state: any;

  getState(): any {
    return this.state;
  }

  setState(state: any) {
    this.state = state;
  }
}

export class ConcreteSubscriber implements Subscriber {
  private state: any;

  constructor(private subject: ConcreteSubject) {}

  public notify(): void {
    this.state = this.subject.getState();
    console.log(
      "ConcreteSubscriber: Received notify method from subject state",
      this.state
    );
  }

  getSubject(): ConcreteSubject {
    return this.subject;
  }

  setSubject(subject: ConcreteSubject) {
    this.subject = subject;
  }
}

const subject = new ConcreteSubject();
const subA = new ConcreteSubscriber(subject);
subject.addSubscriber(subA);

const subB = new ConcreteSubscriber(subject);
subject.addSubscriber(subB);

subject.setState(19);
subject.notify();
