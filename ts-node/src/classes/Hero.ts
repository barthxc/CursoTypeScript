import powers, { Powers } from "../data/powers";
export class Hero {
  constructor(
    public name: string,
    public powerId: number,
    public age: number
  ) {}
  get power(): string {
    return (
      powers.find((power) => power.id === this.powerId)!.desc || "Not found"
    );
  }
}

export class Hero1 {}
export class Hero2 {}
export class Hero3 {}

export const PI = 3.1416;
