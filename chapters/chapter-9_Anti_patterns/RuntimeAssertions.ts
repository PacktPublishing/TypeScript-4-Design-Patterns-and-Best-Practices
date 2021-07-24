function divMod(x: number, y: number): [number, number] {
  assertIsNumber(x);
  assertIsNumber(y);
  assertNotZero(y);
  return [Math.floor(x / y), x % y];
}

export function assertIsNumber<T>(
  val: T,
  errorMessage = `Expected 'val' to be a number, but received: '${val}'`
) {
  if (typeof val !== "number") {
    throw new Error(errorMessage);
  }
}

export function assertNotZero<T extends number>(
  val: T,
  errorMessage = `Expected 'val' to be a non zero number, but received: '${val}'`
) {
  if (val === 0) {
    throw new Error(errorMessage);
  }
}

// divMod(2, 0);
