interface AppState {
  data: any;
}

abstract class Memento {
  constructor(protected state: AppState) {}
  getState(): AppState {
    return this.state;
  }
}

class ConcreteMemento extends Memento {
  getState(): AppState {
    return super.getState();
  }
}

class Originator {
  constructor(private state: AppState) {}
  save(): Memento {
    return new ConcreteMemento(this.state);
  }
  restore(memento: Memento): void {
    this.state = memento.getState();
  }
}

export class CareTaker {
  constructor(
    private originator: Originator,
    private mementos: Memento[] = []
  ) {}

  restoreLastMemento() {
    if (this.mementos.length === 0) {
      return;
    }
    const memento = this.mementos.pop()!;
    this.originator.restore(memento);
  }

  saveMemento() {
    this.mementos.push(this.originator.save());
  }
}
const state: AppState = {
  data: "paste data",
};
const originator = new Originator(state);
const caretaker = new CareTaker(originator);
console.log("Originator data:", originator.save().getState().data); // Originator data: paste data

state.data = "many more data";
caretaker.saveMemento();
caretaker.restoreLastMemento();
console.log("Restored data:", originator.save().getState().data); // Restored data: many more data

// interface EditorState {}
// class Editor {
//   constructor(private state: EditorState) {}
//   public save(): Revision {
//     return new Revision(this.state);
//   }
//   public restore(revision: Revision): void {
//     this.state = revision.getState();
//   }
// }

// class Revision {
//   constructor(private state: EditorState) {}
// }

// class RevisionList {
//   private revisions: Revision[] = [];
//   constructor(private editor: Editor) {}
// }
