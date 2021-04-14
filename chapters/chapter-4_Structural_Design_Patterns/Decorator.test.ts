import { LogEventDecorator, Event } from "./Decorator";
const spy = jest.spyOn(console, "log").mockImplementation(() => {});

afterEach(() => {
  spy.mockReset();
});

test("it calls the decorated object method", () => {
  const mockSendEvent = jest.fn();
  const mock = {
    send: mockSendEvent,
  };
  const log = new LogEventDecorator(mock);
  log.send("example");
  expect(mockSendEvent).toHaveBeenCalledWith("example");
});

test("it calls the decorator calls before and after the call to decorated method", () => {
  const mockSendEvent = jest.fn();
  const mock = {
    send: mockSendEvent,
  };
  const log = new LogEventDecorator(mock);
  log.send("example");
  expect(spy).toBeCalledTimes(2);
});
