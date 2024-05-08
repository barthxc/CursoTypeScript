(() => {
  class Avenger {
    constructor(name = "No name", power = 123) {
      this.name = name;
      this.power = power;
    }
  }

  class FlyingAvender extends Avenger {
    constructor(name, power) {
      super(name, power);
      this.flying = true;
    }
  }

  const hulk = new Avenger("Hulk", 9001);
  const falcon = new FlyingAvender("Falcon", 50);

  console.log(hulk);
  console.log(falcon);
})();
