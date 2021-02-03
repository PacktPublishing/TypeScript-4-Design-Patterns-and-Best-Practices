export function sum(a: number, b: number) {
    return a + b;
}

export function forOf<T>(arr: Array<T>, cb: (item: T) => void) {
    for (let item of arr) {
        cb(item)
    }
}

type OneOrTwo = 1 | 2
forOf([1,2,3,"4","Hello", 1 as OneOrTwo], (item) => console.info(item))