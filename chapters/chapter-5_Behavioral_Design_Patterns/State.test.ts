import { Originator, PassiveState, ActiveState } from "./State";
const spy = jest.spyOn(console, "log").mockImplementation();
afterAll(() => {
  spy.mockRestore();
});

test("Originator state is Passive by default", () => {
  const origin = new Originator();
  origin.reportState();

  expect(spy).toHaveBeenCalledWith("Originator is in passive mode currently");
});

test("Originator state can transition to a new state", () => {
  const origin = new Originator();
  const newState = new ActiveState(origin);
  origin.changeState(newState);
  origin.reportState();

  expect(spy).toHaveBeenCalledWith("Originator is in active mode currently");
});
