const isObject = (o) => {
  return o === Object(o) && !isArray(o) && typeof o !== "function";
};

const isArray = (arr) => {
  return Array.isArray(a);
};
