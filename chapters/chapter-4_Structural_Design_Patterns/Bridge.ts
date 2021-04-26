interface Box {
  id: string;
  value: string;
}
interface BoxArranger {
  arrangeItem(item: Box, items: Box[]): Box[];
}

abstract class BoxContainer {
  constructor(public items: Box[] = [], protected boxArranger: BoxArranger) {}
  arrangeItem(item: Box) {}
}

class StraightBoxContainer extends BoxContainer {
  arrangeItem(item: Box) {
    this.items = this.boxArranger.arrangeItem(item, this.items);
  }
}

class ReversingBoxContainer extends BoxContainer {
  arrangeItem(item: Box) {
    this.items = this.boxArranger.arrangeItem(item, this.items).reverse();
  }
}

class PutLastBoxArranger implements BoxArranger {
  arrangeItem(item: Box, items: Box[]): Box[] {
    items = items.concat(item);
    return items;
  }
}

class PutFirstBoxArranger implements BoxArranger {
  arrangeItem(item: Box, items: Box[]): Box[] {
    let result = items.slice();
    result.unshift(item);
    return result;
  }
}
const items: Box[] = [
  {
    id: "1",
    value: "abc",
  },
];
const pfa = new PutFirstBoxArranger();
const pla = new PutLastBoxArranger();
const rv = new StraightBoxContainer(items, pla);
rv.arrangeItem({
  id: "3",
  value: "dfa",
}); // [ { id: '3', value: 'dfa' }, { id: '1', value: 'abc' } ]
console.log(rv.items);
const sc = new StraightBoxContainer(items, pfa);
sc.arrangeItem({
  id: "3",
  value: "dfa",
});
console.log(sc.items);
[
  { id: "3", value: "dfa" },
  { id: "1", value: "abc" },
];

// // Implementor type
interface StoreAPI<T> {
  store(item: T);
}
type PersistedStorageItem = StorageItem & {
  createdAt: Date;
  persist(): void;
};
// Abstraction type
interface List<T> {
  push(item: T);
}
class ArrayList<T> implements List<T> {
  constructor(private items: T[], private storeAPI: StoreAPI<T>) {}
  push(item: T): void {
    this.storeAPI.store(item);
  }
  // implements methods of List
}
class LinkedList<T> implements List<T> {
  constructor(private root: Node, private items: T[]) {}
  // implements methods of List
}
