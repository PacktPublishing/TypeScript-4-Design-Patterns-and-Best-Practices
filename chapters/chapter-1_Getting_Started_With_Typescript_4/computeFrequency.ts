function computeFrequency(input: string) {
  const freqTable = new Map();
  for (let ch of input) {
    if (!freqTable.has(ch)) {
      freqTable.set(ch, 1);
    } else {
      freqTable.set(ch, freqTable.get(ch) + 1);
    }
  }

  return freqTable;
}

console.log(computeFrequency("12345"));
