(() => {
  const batman: string = "Batman";
  const linternaVerde: string = "Linterna Verde";
  const volcanNegro: string = `Herore: Volcan Negro`;

  const abc = 123;
  console.log(`I'm ${batman}, ${abc}`);

  console.log(batman.toUpperCase());

  console.log(batman[10]?.toUpperCase() || "No está batman");
})();
