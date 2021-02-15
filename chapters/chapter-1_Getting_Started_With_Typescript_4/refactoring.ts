function find<T>(arr: T[], predicate: (item: T) => boolean) {
  for (let item of arr) {
    if (predicate(item)) {
      return item;
    }
  }
  return undefined;
}

function indexOf<T>(arr: T[], predicate: (item: T) => boolean) {
  for (let i = 0; i < arr.length; i += 1) {
    if (predicate(arr[i])) {
      return i;
    }
  }
  return -1;
}
