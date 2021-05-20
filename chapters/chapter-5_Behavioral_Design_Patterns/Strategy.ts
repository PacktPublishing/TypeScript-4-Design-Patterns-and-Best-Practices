interface BillingStrategy {
  calculate(): void;
}

class ConcreteBillingStrategyA implements BillingStrategy {
  calculate(): void {
    console.log("Calculating bill using first strategy");
  }
}

class ConcreteBillingStrategyB implements BillingStrategy {
  calculate(): void {
    console.log("Calculating bill using second strategy");
  }
}

class BillingContext {
  constructor(private strategy: BillingStrategy) {}

  setStrategy(strategy: BillingStrategy) {
    this.strategy = strategy;
  }

  calculateBill(): void {
    this.strategy.calculate();
  }
}
