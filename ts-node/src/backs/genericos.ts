import {
  printObject,
  genericFunction,
  genericFunctionArrow,
} from "../generics/generics";
import { Villain, Hero } from "../interfaces";

// printObject(123);
// printObject(new Date());
// printObject([1, 2, 3, 4, 5]);
// printObject("Hola Mundo");

// console.log(genericFunction(3.12345).toFixed(2));
// console.log(genericFunction(new Date()).getDate());
// console.log(genericFunctionArrow("Pablito").charAt(0));

const deadpool = {
  name: "Deadpool",
  realName: "Wade winston Wilson",
  dangerLevel: 130,
};

console.log(genericFunctionArrow<Villain>(deadpool).dangerLevel);
