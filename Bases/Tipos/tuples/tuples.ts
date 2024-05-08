(() => {
  const hero: [string, number, boolean] = ["Dr Strange", 100, true];
  hero[0] = "IronMan";
  hero[1] = 150;
  hero[2] = false;

  console.log(hero);
})();
