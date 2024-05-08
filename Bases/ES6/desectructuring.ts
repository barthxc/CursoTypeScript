(() => {
  type Avengers = {
    nick: string;
    ironman: string;
    vision: string;
    activo: boolean;
    poder: number;
  };

  const avengers: Avengers = {
    nick: "Samuel L. Jackson",
    ironman: "Robert Downey Jr.",
    vision: "Paul Bettany",
    activo: true,
    poder: 1500.4335,
  };

  //   const { nick, ironman, vision, activo, poder } = avengers;
  //   console.log(poder.toFixed(2), vision.toUpperCase());

  const printAvenger = ({ ironman, ...resto }: Avengers) => {
    console.log(ironman, resto);
  };

  const avengersArr: [string, boolean, boolean] = ["Cap. América", true, false];
  const [capi, ironman, numberMan] = avengersArr;

  console.log({ capi });
})();
