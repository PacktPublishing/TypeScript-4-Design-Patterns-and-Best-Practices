export interface Flyweight {
  perform(customization: { id: string }): void;
}

export class ConcreteFlyweight implements Flyweight {
  constructor(private sharedState: Object) {}

  public perform(customization: { id: string }): void {
    console.log(
      `Call to ConcreteFlyweight with param: ${customization.id} called`
    );
  }
}

export class FlyweightFactory {
  private cache = new Map<Object, Flyweight>();
  public create(sharedState: Object): Flyweight {
    if (!this.cache.has(sharedState)) {
      this.cache.set(sharedState, new ConcreteFlyweight(sharedState));
    }
    return this.cache.get(sharedState)!;
  }
}

new FlyweightFactory().create({ state: "Initial" }).perform({ id: "abc" });
