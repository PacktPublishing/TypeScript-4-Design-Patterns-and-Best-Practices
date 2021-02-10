function removeDuplicateChars(input: string) {
  const result: string[] = [];
  //const result = ["a"];
  let seen = new Set();
  for (let c of input) {
    if (!seen.has(c)) {
      seen.add(c);
      result.push(c);
    }
  }
}

console.log(removeDuplicateChars("aarfqwevzxcddd"));
