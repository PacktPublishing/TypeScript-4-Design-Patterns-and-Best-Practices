export interface Store {
  save(data: string): void;
}

export class TextStore implements Store {
  save(data: string): void {
    console.log(`Called 'save' from TextStore with data=${data}`);
  }
}

export class ProxyTextStore implements Store {
  constructor(private textStore?: TextStore) {}
  save(data: string): void {
    console.log(`Called 'save' from ProxyTextStore with data=${data}`);
    if (!this.textStore) {
      console.log("Lazy init: textStore.");
      this.textStore = new TextStore();
    }
    this.textStore.save(data);
  }
}

new ProxyTextStore().save("Data");
//Called 'save' from ProxyTextStore with data=Data
//Lazy init: textStore.
//Called 'save' from TextStore with data=Data
