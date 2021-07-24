import Singleton from "chapters/chapter-3_Creational_Design_Patterns/singleton";

{
  type ServiceA = {
    action: () => void;
  };
  type ServiceB = {
    action: () => void;
  };

  class Facade {
    private static instance: Facade;
    private constructor(
      private serviceA: ServiceA,
      private serviceB: ServiceB
    ) {}
    static getInstance(serviceA: ServiceA, serviceB: ServiceB) {
      if (!Facade.instance) {
        Facade.instance = new Facade(serviceA, serviceB);
      }
      return Facade.instance;
    }

    perform() {
      this.serviceA.action();
      this.serviceB.action();
      // more complex logic here
    }
  }

  interface Iterator<T> {
    next(): T | null;
    hasNext(): boolean;
  }

  type Component = {
    parent: Component;
  };

  class Composite {
    private children: Component[] = [];

    getIterator(): Iterator<Component> {
      return new (class {
        private index: number = 0;
        constructor(public superThis: Composite) {}

        key(): number {
          return this.index;
        }
        next(): Component {
          const item = this.superThis.children[this.index];
          this.index += 1;
          return item;
        }

        hasNext(): boolean {
          return this.index < this.superThis.children.length;
        }
      })(this);
    }
  }
}

{
  interface Command {
    execute(): void;
  }
  class SaveCommand implements Command {
    constructor(private receiver: Receiver) {}

    execute() {
      this.receiver.saveMemento();
    }
  }
  class RestoreCommand implements Command {
    constructor(private receiver: Receiver) {}

    execute() {
      this.receiver.restoreLastMemento();
    }
  }
  interface Receiver {
    restoreLastMemento();
    saveMemento();
  }
  type Originator = {
    save: () => Memento;
    restore: (memento: Memento) => void;
  };
  type Memento = string;
  class CareTaker implements Receiver {
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
}
