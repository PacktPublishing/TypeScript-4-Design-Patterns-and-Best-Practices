import {
  Weapon,
  LongBow,
  LongSword,
  LongBowFactory,
  LongSwordFactory,
} from "./FactoryMethod";

let lbf: LongBowFactory;
let lsf: LongSwordFactory;
beforeEach(() => {
  lbf = new LongBowFactory();
  lsf = new LongSwordFactory();
});

test("it creates a LongBow type using the factory", () => {
  const weapon = lbf.create();
  expect(weapon).toBeInstanceOf(LongBow);
});

test("it creates a LongSword type using the factory", () => {
  const weapon = lsf.create();
  expect(weapon).toBeInstanceOf(LongSword);
});
