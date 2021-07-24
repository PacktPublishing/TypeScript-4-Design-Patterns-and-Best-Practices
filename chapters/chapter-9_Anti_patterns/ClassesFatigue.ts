interface Shape {}
class Circle implements Shape {}
class Rectangle implements Shape {}
class Polygon implements Shape {}
class Square extends Polygon {}
class Triangle extends Polygon {}

interface Reader {
  read(): string[];
}

interface Writer {
  write(input: string[]): void;
}

class CSV implements Reader, Writer {
  constructor(csvFilePath: string) {}

  read(): string[] {
    return [];
  }
  write(input: string[]): void {}
}
{
  class CSVReader implements Reader {
    constructor(csvFilePath: string) {}

    read(): string[] {
      return [];
    }
  }

  class CSVWriter implements Writer {
    constructor() {}

    write(input: string[]): void {}
  }
  class ExcelReader implements Reader {
    constructor(excelFilePath: string) {}

    read(): string[] {
      return [];
    }
  }
  class PDFWriter implements Writer {
    constructor(pdfFilePath: string) {}

    write(input: string[]): void {}
  }

  class ReaderToWriters {
    constructor(private reader: Reader, private writers: Writer[]) {}
    perform() {
      const lines = this.reader.read();
      this.writers.forEach((w) => w.write(lines));
    }
  }
}
class ExcelToCSV extends CSV {
  constructor(csvFilePath: string, excelFilePath: string) {
    super(csvFilePath);
  }

  read(): string[] {
    // Read from Excel file
    return [];
  }
}
class ExcelToPDF extends ExcelToCSV {
  constructor(csvFilePath: string, excelFilePath: string, pdfFilePath: string) {
    super("", excelFilePath);
  }

  write(): string[] {
    // Write to PDF
    return [];
  }
}

interface Animal {
  eat(): void;
}
interface Mammal extends Animal {
  sleep(): void;
}
interface Flyer extends Animal {
  fly(): void;
}
class Bat implements Mammal, Flyer {
  fly(): void {}
  eat(): void {}
  sleep(): void {}
}

// interface Configuration {
//   paths: {
//     apiBase: string;
//     login: string;
//   };
// }

const applicationConfig = {
  paths: {
    apiBase: "/v1",
    login: "/login",
  },
  flags: {
    isEnabled: true,
    isAvailable() {
      return this.isEnabled;
    },
  },
};

type Configuration = Readonly<typeof applicationConfig>;
