import { HTTPRequest, LogRequestHandler } from "./ChainOfResponsibility";
const spy = jest.spyOn(console, "log").mockImplementation();
afterAll(() => {
  spy.mockRestore();
});

test("HTTPRequest", () => {
  const req = new HTTPRequest("localhost", new Map().set("q", "searchTerm"));
  expect(req.getOrigin()).toBe("localhost");
  expect(req.getParams()).toEqual(new Map().set("q", "searchTerm"));
});

test("LogRequestHandler", () => {
  const req = new HTTPRequest("localhost", new Map().set("q", "searchTerm"));
  const requestHandler = new LogRequestHandler(null);
  requestHandler.handleRequest(req);
  expect(spy).toHaveBeenCalledTimes(1);
});
