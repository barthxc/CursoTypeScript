(() => {
  interface Client {
    name: string;
    age?: number;
    address: Address;
    getFullAddress(id: string): string;
  }

  interface Address {
    id: number;
    zip: string;
    city: string;
  }

  const client: Client = {
    name: "Pablo",
    age: 25,
    address: {
      id: 123,
      zip: "KY2SUB",
      city: "Ottawa",
    },
    getFullAddress(id: string) {
      return this.address.city;
    },
  };

  const client2: Client = {
    name: "Melissa",
    age: 30,
    address: {
      city: "Toronto",
      id: 123,
      zip: "K2S U40",
    },
    getFullAddress(id: string) {
      return this.address.city;
    },
  };

  console.log(client.getFullAddress("dasdas"));
})();
