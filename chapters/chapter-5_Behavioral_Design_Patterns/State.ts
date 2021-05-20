interface State {
  onEnterState(): void;
  reportState(): void;
  data: any;
}

export class PassiveState implements State {
  data: any;
  constructor() {
    this.data = "Passive data";
  }

  reportState(): void {
    console.log("Originator is in passive mode currently");
  }

  onEnterState(): void {
    console.log("Originator changed into passing mode");
  }
}

export class ActiveState implements State {
  data: any;
  constructor() {
    this.data = "Active data";
  }

  reportState(): void {
    console.log("Originator is in active mode currently");
  }

  onEnterState(): void {
    console.log("Originator changed into active mode");
  }
}

export class Originator {
  private state: State;
  constructor() {
    this.state = new PassiveState();
  }

  changeState(state: State): void {
    this.state = state;
    this.state.onEnterState();
  }

  reportState(): void {
    this.state.reportState();
  }
}
// const originator = new Originator();
// originator.reportState(); // Originator is in passive mode currently

// originator.changeState(new ActiveState()); // Originator changed into active mode
// originator.reportState(); // Originator is in active mode currently
