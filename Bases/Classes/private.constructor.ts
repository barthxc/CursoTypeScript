(() => {
  class Apocalipsis {
    static instance: Apocalipsis;
    private constructor(public nombre: string) {}

    static callApocalipsis(): Apocalipsis {
      if (!Apocalipsis.instance) {
        Apocalipsis.instance = new Apocalipsis("soy apocalipsis el único");
      }
      return Apocalipsis.instance;
    }
    changeName(newName: string): void {
      this.nombre = newName;
    }
  }

  const apocalipsis = Apocalipsis.callApocalipsis();
  const apocalipsis2 = Apocalipsis.callApocalipsis();
  const apocalipsis3 = Apocalipsis.callApocalipsis();

  apocalipsis.changeName("Xavier");

  console.log(apocalipsis2, apocalipsis3);
})();
