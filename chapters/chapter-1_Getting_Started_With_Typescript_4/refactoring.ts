type Predicate<T> = (item: T) => boolean;

function find<T>(arr: T[], predicate: Predicate<T>) {
  for (let item of arr) {
    if (predicate(item)) {
      return item;
    }
  }
  return undefined;
}

function indexOf<T>(arr: T[], predicate: Predicate<T>) {
  for (let i = 0; i < arr.length; i += 1) {
    if (predicate(arr[i])) {
      return i;
    }
  }
  return -1;
}
