interface ButtonState {
  status: "loading" | "disabled" | "active";
  text: string;
  icon: string;
}

class ActiveButtonState implements ButtonState {
  status: ButtonState["status"] = "active";
  text = "Click me";
  icon = "click_me_icon";
  constructor(private originator: Button) {}
}

export class Button {
  private state: ButtonState;

  constructor() {
    this.state = new ActiveButtonState(this);
  }

  changeState(state: ButtonState) {
    this.state = state;
  }

  render(): string {
    const { text, icon, status } = this.state;
    let disabled = false;
    if (status === "loading") {
      disabled = true;
    }
    return `<button disabled=${disabled}><img src=${icon}/>${text}</button>`;
  }
}
