(() => {
  const addNumbers = (a: number, b: number) => a + b;
  const greet = (name: string) => `Hola ${name}`;
  const saveTheWorld = () => `El Mundo está salvado!`;

  let myFunction: () => string;

  //!myFunction = 10;
  //!console.log(myFunction);

  //? myFunction = addNumbers;
  //? console.log(myFunction(2, 3));

  //? myFunction = greet;
  //? console.log(myFunction("Pablo"));

  myFunction = saveTheWorld;
  console.log(saveTheWorld());
})();
