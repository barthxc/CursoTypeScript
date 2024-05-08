export const printObject = (argument: any) => {
  console.log(argument);
};
//Puedes usar cualquier tipo de letra para definir un genérico pero la letra T es el estandar para un genérico
export function genericFunction<T>(argument: T): T {
  return argument;
}

export const genericFunctionArrow = <T>(argument: T) => argument;
