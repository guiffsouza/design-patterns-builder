import { PersonBuilder } from "./class/personBuilder.js";
import { Validator } from "./class/validator.js";

const person1 = new PersonBuilder()
  .setAge(28)
  .setCity("Niteroi")
  .setName("Guilherme")
  .builder();

const person2 = new PersonBuilder().setName("Name").setAge(19).builder();

console.log(person1);

console.log(person2);

new Validator(person2).vName().vAge().verify();
