class Facade {
  constructor(private serviceA: ServiceA, private serviceB: ServiceB) {}

  perform() {
    this.serviceA.action();
    this.serviceB.action();
    // more complex logic here
  }
}
interface ServiceA {
  action(): void;
}
interface ServiceB {
  action(): void;
}

class ServiceAImpl implements ServiceA {
  action(): void {
    console.log("Performing action on Service A");
  }
}

class ServiceBImpl implements ServiceB {
  action(): void {
    console.log("Performing action on Service B");
  }
}

new Facade(new ServiceAImpl(), new ServiceBImpl()).perform();
