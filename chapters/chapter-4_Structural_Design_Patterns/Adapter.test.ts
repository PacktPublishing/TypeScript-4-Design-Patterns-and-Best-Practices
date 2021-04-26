import { ActionSender, EventAdapter } from "./Adapter";
import { mocked } from "ts-jest/utils";
import { EventCreator } from "./EventCreator";

jest.mock("./EventCreator", () => {
  return {
    EventCreator: jest.fn().mockImplementation(() => {
      return {
        sendEvent: jest.fn(),
      };
    }),
  };
});

describe("EventCreator", () => {
  const mockedEventCreator = mocked(EventCreator, true);
  beforeEach(() => {
    // Clears the record of calls to the mock constructor function and its methods
    mockedEventCreator.mockClear();
  });

  let ad: ActionSender;
  test("it calls the service function", () => {
    ad = new EventAdapter();
    ad.sendAction("action");
    expect(mockedEventCreator).toHaveBeenCalledTimes(1);
  });
});
