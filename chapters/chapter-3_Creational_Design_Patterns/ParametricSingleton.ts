export class ParametricSingleton {
  private param: string;
  // Stores the singletons instances
  private static instances: Map<string, ParametricSingleton>;
  // Prevents creation of new instances
  private constructor(param: string) {
    this.param = param;
  }
  // Method to retrieve instance
  static getInstance(param: string) {
    if (!ParametricSingleton.instances.has(param)) {
      ParametricSingleton.instances.set(param, new ParametricSingleton(param));
    }
    return ParametricSingleton.instances.get(param);
  }
}

export default ParametricSingleton;
