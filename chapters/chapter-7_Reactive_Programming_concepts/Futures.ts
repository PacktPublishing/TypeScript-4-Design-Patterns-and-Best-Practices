//   resolve(): Future<void>;
//   resolve<T>(value: T | FutureLike<T>): Future<T>;
// interface FutureLike<T> {
//   then<TResult1 = T, TResult2 = never>(
//     onfulfilled?:
//       | ((value: T) => TResult1 | FutureLike<TResult1>)
//       | undefined
//       | null,
//     onrejected?:
//       | ((reason: any) => TResult2 | FutureLike<TResult2>)
//       | undefined
//       | null
//   ): FutureLike<TResult1 | TResult2>;
// }

// interface FutureConstructor {
//   readonly prototype: Future<any>;

//   new <T>(
//     executor: (
//       resolve: (value: T | FutureLike<T>) => void,
//       reject: (reason?: any) => void
//     ) => Cancel
//   ): Future<T>;
//   reject<T = never>(reason?: any): Future<T>;
//   resolve(): Future<void>;
//   resolve<T>(value: T | FutureLike<T>): Future<T>;
// }

// declare var Future: FutureConstructor;

// interface Future<T> {
//   then<TResult1 = T, TResult2 = never>(
//     onfulfilled?:
//       | ((value: T) => TResult1 | FutureLike<TResult1>)
//       | undefined
//       | null,
//     onrejected?:
//       | ((reason: any) => TResult2 | FutureLike<TResult2>)
//       | undefined
//       | null
//   ): Future<TResult1 | TResult2>;
//   catch<TResult = never>(
//     onrejected?:
//       | ((reason: any) => TResult | FutureLike<TResult>)
//       | undefined
//       | null
//   ): Future<T | TResult>;
// }

import { noop } from "lodash";
export type Reject<TResult = never> = (reason?: any) => void;
export type Resolve<TResult = never> = (t: TResult) => void;

export type Execution<E, T> = (
  resolve: (value: T) => void,
  reject: (reason?: any) => void
) => () => void;

class Future<E, T> {
  private fn: Execution<E, T>;

  constructor(ex: Execution<E, T>) {
    this.fn = ex;
  }
  fork(reject: Reject<E>, resolve: Resolve<T>): () => void {
    return this.fn(reject, resolve);
  }

  resolve(): Promise<T> {
    return new Promise((resolve, reject) => {
      this.fn(reject, resolve);
    });
  }

  static success<E, T>(t: T): Future<E, T> {
    return new Future((reject: Reject<E>, resolve: Resolve<T>) => {
      resolve(t);
      return noop;
    });
  }

  static fail<E, T>(err: E): Future<E, T> {
    return new Future((reject: Reject<E>, resolve: Resolve<T>) => {
      reject(err);
      return noop;
    });
  }
  then<A>(f: (t: T) => Future<E, T>): Future<E, T> {
    return new Future((reject: Reject<E>, resolve: Resolve<T>) => {
      return this.fn(
        (err) => reject(err),
        (a: T) => f(a).fork(reject, resolve)
      );
    });
  }
}

const task = new Future<Error, string>((reject, resolve: Resolve<string>) => {
  const v = setTimeout(() => resolve("Result"), 1000);
  return () => clearTimeout(v);
}).then((value: string) => {
  return Future.success(value.toUpperCase());
});
const cancelTask = task.fork(
  (err) => console.error(err),
  (result) => console.warn(`Task Success: ${result}`)
);
