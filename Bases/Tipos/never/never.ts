() => {
  const error = (message: string): never => {
    throw new Error(message);
  };

  error("Ayuda");
  console.log("hey");
};
