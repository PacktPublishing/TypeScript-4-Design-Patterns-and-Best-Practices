export interface Event {
  send(message: string): void;
}

export class SendEmailEvent implements Event {
  public send(message: string): void {
    // send event using email client
    console.log("Currently sending event message", message);
  }
}

export class LogEventDecorator implements Event {
  constructor(private event: Event) {
    this.event = event;
  }

  public send(message: string): void {
    console.log("Before sending event message", message);
    this.event.send(message); // forward call to event
    console.log("After sending event message: ", message);
  }
}

const sendEmail: Event = new SendEmailEvent();
const logSendEmail = new LogEventDecorator(sendEmail);
logSendEmail.send("Hi!");

function logCall(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {}

function LogCall() {
  return function (
    target: Object,
    key: string | symbol,
    descriptor: PropertyDescriptor
  ) {
    const caller = descriptor.value;
    descriptor.value = (message: string) => {
      console.log("Before sending event message", message);
      // @ts-ignore
      caller.apply(this, [message]);
      console.log("After sending event message", message);
      return caller;
    };
    return descriptor;
  };
}

class EventService {
  @LogCall()
  createEvent(message: string): void {
    console.log("Currently sending event message", message);
  }
}

new EventService().createEvent("Message");
