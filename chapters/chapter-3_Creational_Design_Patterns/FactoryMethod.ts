export interface Weapon {
  getName(): string;
  getDamage(): number;
  getRange(): number;
}

export class LongSword implements Weapon {
  getName(): string {
    return "LongSword";
  }
  getDamage(): number {
    return 10;
  }
  getRange(): number {
    return 2;
  }
}

export class LongBow implements Weapon {
  getName(): string {
    return "LongBow";
  }
  getDamage(): number {
    return 8;
  }
  getRange(): number {
    return 16;
  }
}

interface WeaponFactory {
  create(): Weapon;
}

export class LongSwordFactory implements WeaponFactory {
  create(): Weapon {
    return new LongSword();
  }
}
export class LongBowFactory implements WeaponFactory {
  create(): Weapon {
    return new LongBow();
  }
}

const lbf = new LongBowFactory();
const lsf = new LongSwordFactory();
const factories: WeaponFactory[] = [lbf, lsf, lbf];
factories.forEach((f: WeaponFactory) => {
  console.debug(f.create());
});

const enum WeaponType {
  LONGBOW,
  LONGSWORD,
}

class WeaponCreator {
  create(weaponType: WeaponType): Weapon {
    switch (weaponType) {
      case WeaponType.LONGBOW: {
        return new LongBow();
        break;
      }
      case WeaponType.LONGSWORD: {
        return new LongSword();
        break;
      }
    }
  }
}
