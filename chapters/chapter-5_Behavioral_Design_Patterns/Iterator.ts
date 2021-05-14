export interface Iterator<T> {
  next(): T | null;
  hasNext(): boolean;
}
class ListNode<T> {
  constructor(public next: ListNode<T> | null, public data: T) {}
}
class ListIterator<T> implements Iterator<T> {
  constructor(private root: ListNode<T> | null) {}
  next(): T | null {
    if (this.hasNext()) {
      const data = this.root!.data;
      this.root = this.root!.next;
      return data;
    }
    return null;
  }
  hasNext(): boolean {
    return this.root !== null;
  }
}

class ListAggregate<T> {
  constructor(private rootList: ListNode<T>) {}

  getListIterator(): ListIterator<T> {
    return new ListIterator(this.rootList);
  }
}
const list = new ListNode(new ListNode(new ListNode(null, 10), 5), 15);
const aggregate = new ListAggregate(list);
const iterator = aggregate.getListIterator();
while (iterator.hasNext()) {
  console.log(iterator.next()); // prints 15, 5, 10
}
class OnlyA implements Iterable<string> {
  constructor(private limit: number = 3) {}

  [Symbol.iterator]() {
    let limit = this.limit;

    return {
      next(): IteratorResult<string> {
        return {
          done: limit-- === 0,
          value: "A",
        };
      },
    };
  }
}
const a = new OnlyA();
for (let i of a) {
  console.log(i);
}
