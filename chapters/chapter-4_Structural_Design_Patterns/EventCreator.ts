import {EventSender} from "./Adapter";

export class EventCreator implements EventSender {
    sendEvent(action: string): void {
        console.log("Event Created: ", action);
    }
}