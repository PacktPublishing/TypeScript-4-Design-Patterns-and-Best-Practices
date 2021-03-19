export class Singleton {
  // Stores the singleton instance
  private static instance: Singleton;
  // Prevents creation of new instances
  private constructor() {}
  // Method to retrieve instance
  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}

export default Singleton;
