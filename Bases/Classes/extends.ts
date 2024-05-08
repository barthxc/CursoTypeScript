(() => {
  class Avenger {
    constructor(public name: string, public realName: string) {}
    protected getFullname() {
      return `${this.name} ${this.realName}`;
    }
  }

  class Xmen extends Avenger {
    constructor(public name: string, public realName: string) {
      super(name, realName);
    }

    get fullName() {
      return `${this.name} - ${this.realName}`;
    }

    set fullNameX(name: string) {
      this.name = name;
    }
  }

  const wolverine = new Xmen("Wolverine", "Logan");
})();
