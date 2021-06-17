const fetcher = require("node-fetch");

const pullFromApi = fetcher(
  "https://jsonplaceholder.typicode.com/todos/1"
).then((response) => response.json());

pullFromApi.then((result) => {
  console.log(result);
});

const promiseValue = Promise.resolve("Value");
const promiseError = Promise.reject("Value");
function delay(ms: number = 1000) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function failAfter(ms: number = 1000) {
  return new Promise((_, reject) => setTimeout(reject, ms));
}
const races = Promise.race([delay(1000), failAfter(500)]);
const all = Promise.all([delay(1000), failAfter(1500)]);
const settled = Promise.allSettled([delay(1000), failAfter(500)]);
(async () => {
  races
    .then((value) => {
      console.log(value);
    })
    .catch((_) => {
      console.log("Error");
    });
})();
(async () => {
  all
    .then((value) => {
      console.log(value);
    })
    .catch((_) => {
      console.log("Error");
    });
})();
(async () => {
  settled
    .then((value) => {
      console.log(value);
    })
    .catch((_) => {
      console.log("Error");
    });
})();
