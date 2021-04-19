import singleton from "./singleton";

test("singleton is a Singleton", () => {
  expect(singleton.getInstance()).toBe(singleton.getInstance());
});
