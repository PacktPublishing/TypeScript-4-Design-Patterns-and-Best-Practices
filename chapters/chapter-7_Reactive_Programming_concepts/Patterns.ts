import {
  Subject,
  Subscriber,
} from "../chapter-5_Behavioral_Design_Patterns/Observer";

export interface AsyncRequest<T> {
  success: boolean;
  data?: T;
}

export async function asyncPoll<T>(
  fn: () => PromiseLike<AsyncRequest<T>>,
  pollInterval = 5 * 1000,
  pollTimeout = 30 * 1000
): Promise<T> {
  const endTime = new Date().getTime() + pollTimeout;
  const checkCondition = (resolve: Function, reject: Function): void => {
    Promise.resolve(fn())
      .then((result) => {
        const now = new Date().getTime();
        if (result.success) {
          resolve(result.data);
        } else if (now < endTime) {
          setTimeout(checkCondition, pollInterval, resolve, reject);
        } else {
          reject(new Error("Reached timeout. Exiting"));
        }
      })
      .catch((err) => {
        reject(err);
      });
  };
  return new Promise(checkCondition);
}

const result = asyncPoll(async () => {
  try {
    const result = await Promise.resolve({ data: "Value" });
    if (result.data) {
      return Promise.resolve({
        success: true,
        data: result,
      });
    } else {
      return Promise.resolve({
        success: false,
      });
    }
  } catch (err) {
    return Promise.reject(err);
  }
});

result.then((d) => {
  console.log(d);
});

const source = [1, 3, 4];
// const iter = new ListIterator(source);

// function pollOnData(iterator: ListIterator<number>) {
//   while (iterator.hasNext()) {
//     console.log("Processing data:", iterator.next());
//   }
// }
// // producer
// setTimeout(() => {
//   source.push(Math.floor(Math.random() * 100));
// }, 1000);

// // consumer
// setTimeout(() => {
//   pollOnData(iter);
// }, 2000);

export class Producer extends Subject {
  constructor(private state: number[]) {
    super();
    this.state = state;
  }

  getState(): number[] {
    return this.state;
  }

  setState(state: number[]) {
    this.state = state;
  }
}

export class Consumer implements Subscriber {
  private state: any;

  constructor(private subject: Producer) {}

  public notify(): void {
    this.state = this.subject.getState();
    for (let item of this.state) {
      console.log("Processing data:", item);
    }
  }
}

const producer = new Producer([]);
const subA = new Consumer(producer);
producer.addSubscriber(subA);

const subB = new Consumer(producer);
producer.addSubscriber(subB);

setInterval(() => {
  producer.setState(
    producer.getState().concat(Math.floor(Math.random() * 100))
  );
  producer.notify();
}, 1000);
