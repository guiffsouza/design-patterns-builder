import { Person } from "./person.js";

export class PersonBuilder {
  constructor() {
    this.name = "";
    this.age = "";
    this.city = "";
    this.neighborhood = "";
  }

  setName(name) {
    this.name = name;
    return this;
  }

  setAge(age) {
    this.age = age;
    return this;
  }

  setCity(city) {
    this.city = city;
    return this;
  }

  setNeighborhood(neighborhood) {
    this.neighborhood = neighborhood;
    return this;
  }

  builder() {
    const person = {
      name: this.name,
      age: this.age,
      city: this.city,
      neighborhood: this.neighborhood,
    };
    return new Person(person);
  }
}
