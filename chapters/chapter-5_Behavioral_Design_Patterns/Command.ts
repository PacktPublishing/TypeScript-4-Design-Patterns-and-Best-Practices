interface Command {
  execute();
}
interface Receiver {
  methodA();
  methodB();
}
class ConcreteCommandA implements Command {
  constructor(private receiver: Receiver) {}

  execute() {
    this.receiver.methodA();
  }
}
class ConcreteCommandB implements Command {
  constructor(private receiver: Receiver) {}

  execute() {
    this.receiver.methodB();
  }
}

interface CommandHandler {
  handle(command: Command);
}

class ConcreteCommandHandler implements CommandHandler {
  private commands: Command[] = [];
  handle(command: Command) {
    command.execute();
    this.commands.push(command);
  }
}

class ConcreteReceiver implements Receiver {
  methodA() {
    console.log("Called method A");
  }
  methodB() {
    console.log("Called method B");
  }
}

const handler = new ConcreteCommandHandler();
const receiver = new ConcreteReceiver();
handler.handle(new ConcreteCommandA(receiver)); // logs Called method A
handler.handle(new ConcreteCommandB(receiver)); // logs Called method B
