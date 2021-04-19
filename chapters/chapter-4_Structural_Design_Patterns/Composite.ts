interface UIElement {
  render(): string;
}

class WindowComposite implements UIElement {
  private children: UIElement[];

  constructor() {
    this.children = [];
  }

  render(): string {
    let result = "<html>";
    for (let i = 0; i < this.children.length; i += 1) {
      result += this.children[i].render();
    }
    result += "</html>";
    return result;
  }
  addComponent(c: UIElement): void {
    this.children.push(c);
  }
  removeComponent(idx: number): void {
    if (this.children.length <= idx) {
      throw new Error("index out of bound!");
    }
    this.children.splice(idx, 1);
  }
}

class Button implements UIElement {
  constructor(private text: string) {}
  render(): string {
    return `<button>${this.text}</button>`;
  }
}
const wc: WindowComposite = new WindowComposite();
wc.addComponent(new Button("Click me"));
wc.addComponent(new Button("No Click me"));
console.info(wc.render()); // <html><button>Click me</button><button>No Click me</button></html>
