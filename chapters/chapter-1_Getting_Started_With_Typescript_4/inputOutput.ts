const stream = process.stdin;
setImmediate(function () {
  stream.push(null);
});

stream.pipe(process.stdout);
