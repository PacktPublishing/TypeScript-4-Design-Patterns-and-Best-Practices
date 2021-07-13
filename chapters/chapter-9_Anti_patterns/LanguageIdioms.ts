import { fst } from "fp-ts/lib/ReadonlyTuple";
import { type } from "ramda";

class Employee {
  private id: string;
  private name: string;
  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
  getName(): string {
    return this.name;
  }

  setName(name: string) {
    this.name = name;
  }

  getId(): string {
    return this.id;
  }
}
console.log(JSON.stringify(new Employee("Theo", "1"))); // {"id":"Theo","name":"1"}

{
  type Employee = Readonly<{
    name: string;
    id: string;
  }>;

  const theo: Employee = {
    name: "Theo",
    id: "1",
  };

  const newTheo: Employee = { ...theo, id: "2" };
}

interface error {
  Error(): string;
}

import * as fs from "fs";
import * as fsPromises from "fs/promises";
fs.readFile("example.txt", function (err, data) {
  if (err) {
    return console.error(err);
  }
  console.log("File contents" + data.toString());
});

async function readFist1024bytes() {
  let file: fsPromises.FileHandle | null = null;
  const buffer = Buffer.alloc(1024);
  try {
    file = await fsPromises.open("example.txt", "r+");
    await file.read(buffer);
  } finally {
    if (file) {
      await file.close();
    }
  }
  console.log(buffer.toString());
}

// do something with the open *File f
readFist1024bytes();
