export interface HeroPrototype {
  clone(): HeroPrototype;
}

export interface Spell {
  name: string;
}

export class Wizard implements HeroPrototype {
  private spells: Spell[];
  private health: number;
  constructor(private name: string) {
    this.spells = [];
    this.health = 100;
  }

  clone(): Wizard {
    const cloned = Object.create(Wizard.prototype || null);
    Object.getOwnPropertyNames(this).map((key: string) => {
      if (key === "name") {
        cloned[key] = "Unknown";
      } else {
        cloned[key] = this[key];
      }
    });

    return cloned;
  }
}

export class Warrior implements HeroPrototype {
  private weapon: string;
  private health: number;
  constructor(private name: string) {
    this.weapon = "Dagger";
    this.health = 150;
  }

  clone(): Warrior {
    const cloned = Object.create(Warrior.prototype || null);
    Object.getOwnPropertyNames(this).map((key: string) => {
      if (key === "weapon") {
        cloned[key] = "Bare Hands";
      } else {
        cloned[key] = this[key];
      }
    });

    return cloned;
  }
}

let wiz: HeroPrototype = new Wizard("Theo");
let war: HeroPrototype = new Warrior("Mike");
console.debug(wiz.clone());
console.debug(war.clone());
