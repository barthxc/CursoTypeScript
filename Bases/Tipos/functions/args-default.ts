(() => {
  const fullName = (
    firstName: string,
    lastName?: string,
    upper: boolean = false
  ): string => {
    if (upper) {
      return `${firstName} ${lastName || "no lastname"}`.toUpperCase();
    } else {
      return `${firstName} ${lastName || "no lastname"}`;
    }
  };

  const name = fullName("Tony", "Stark");
  console.log({ name });
})();
