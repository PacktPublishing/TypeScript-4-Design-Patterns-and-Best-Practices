export interface DocumentVisitor {
  visitConcreteDocumentA(concreteDocumentA: ConcreteDocumentA): void;
  visitConcreteDocumentB(concreteDocumentB: ConcreteDocumentB): void;
}
export interface AcceptsVisitor {
  accept(visitor: DocumentVisitor): void;
}
export class ConcreteDocumentA implements AcceptsVisitor {
  accept(visitor: DocumentVisitor): void {
    visitor.visitConcreteDocumentA(this);
  }
}
export class ConcreteDocumentB implements AcceptsVisitor {
  accept(visitor: DocumentVisitor): void {
    visitor.visitConcreteDocumentB(this);
  }
}
export class ConcreteDocumentVisitor implements DocumentVisitor {
  visitConcreteDocumentA(concreteDocumentA: ConcreteDocumentA): void {
    console.log("ConcreteDocumentVisitor visits ConcreteDocumentA");
  }

  visitConcreteDocumentB(concreteDocumentB: ConcreteDocumentB): void {
    console.log("ConcreteDocumentVisitor visits ConcreteDocumentB");
  }
}
export class CompositeDocument implements AcceptsVisitor {
  private documents: AcceptsVisitor[] = [];

  public addDocument(d: AcceptsVisitor): void {
    this.documents.push(d);
  }
  public accept(visitor: DocumentVisitor): void {
    for (let document of this.documents) {
      document.accept(visitor);
    }
  }
}

const composite = new CompositeDocument();
const visitor = new ConcreteDocumentVisitor();
composite.addDocument(new ConcreteDocumentA());
composite.addDocument(new ConcreteDocumentB());
composite.accept(visitor);
