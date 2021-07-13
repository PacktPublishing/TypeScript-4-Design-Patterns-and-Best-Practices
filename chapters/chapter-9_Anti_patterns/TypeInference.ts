function example(param: { value: "a" }) {
  return param;
}

const myParam = {
  value: "a",
};

example(myParam);

// Literal types are widened when they are inferred for mutable locations (such as the value property in your example) unless you have a type annotation or type assertion indicating otherwise.

const boo = function () {
  return 1;
};
