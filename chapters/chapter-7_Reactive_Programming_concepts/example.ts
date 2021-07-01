{
  class ChristmasBox<TSurprise> {
    private constructor(private value: TSurprise) {
      this.value = value;
    }
    static with(value: any): ChristmasBox<any> {
      return new ChristmasBox(value);
    }

    open(): TSurprise {
      return this.value;
    }

    turnInto<TwistedSurprise>(
      f: (v: TSurprise) => TwistedSurprise
    ): ChristmasBox<TwistedSurprise> {
      return ChristmasBox.with(f(this.value));
    }

    chain<HappySurprise>(
      fn: (v: TSurprise) => ChristmasBox<HappySurprise>
    ): ChristmasBox<HappySurprise> {
      if (this.value instanceof ChristmasBox) {
        return fn(this.value.open());
      } else {
        return fn(this.value);
      }
    }
  }

  console.log(ChristmasBox.with("Chocolate candy")); // Oops we got a close box. We want it open
  console.log(ChristmasBox.with("Chocolate candy").open()); // Thats better!

  const molases = (candy: string) => ChristmasBox.with("Molasses");
  const ourPresent = ChristmasBox.with("Chocolate candy");
  ourPresent.turnInto(molases);
  const ourNewPresent = ourPresent.turnInto(molases);

  console.log(ourNewPresent.open()); // Yikes!

  const chocolateFountain = (mollases: string) =>
    ChristmasBox.with("Chocolate fountain");

  const ourNewNewPresent = ourPresent.chain(molases).chain(chocolateFountain);

  console.log(ourNewNewPresent.open()); // Yum Yum!
}

type T0 = Extract<"a" | "b" | "c", "a" | "b" | "f">;

type T1 = Extract<string | number | (() => void), Function>;

type T1 = () => void;
