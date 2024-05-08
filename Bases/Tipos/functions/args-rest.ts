(() => {
  const fullName = (firstName: string, ...restoDeNombres: string[]): string => {
    return `${firstName} ${restoDeNombres.join(" ")}`;
  };
  const superman = fullName("Clark", "Joseph", "Kent");
  console.log({ superman });
})();
