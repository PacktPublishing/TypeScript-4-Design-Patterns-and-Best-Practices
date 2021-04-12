import {EventCreator} from "./EventCreator";

export interface ActionSender {
  sendAction(action: string): Promise<void>;
}

export class ActionCreator implements ActionSender {
  sendAction(action: string): Promise<void> {
    return new Promise((resolve, reject) => {
      console.log("Event Created: ", action);
      resolve();
    });
  }
}

export interface EventSender {
  sendEvent(eventName: string): void;
}

export class EventAdapter implements ActionSender {
  eventSender: EventSender;
  constructor(eventSender: EventSender = new EventCreator()) {
    this.eventSender = eventSender;
  }
  public async sendAction(action: string): Promise<void> {
    await this.eventSender.sendEvent(action);
  }
}

export class Client {
  // @ts-ignore
  actionCreator: ActionSender;
  call() {
    this.actionCreator = new ActionCreator();
    this.actionCreator.sendAction("Hello");
    this.actionCreator = new EventAdapter(new EventCreator());
    this.actionCreator.sendAction("Another Action");
  }
}

new Client().call();
