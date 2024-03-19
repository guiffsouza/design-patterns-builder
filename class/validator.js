export class Validator {
  constructor({ name, age, city, neighborhood }) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.neighborhood = neighborhood;
    this.rules = [];
    this.errors = [];
  }

  vName() {
    if (this.name.length > 0) {
      this.rules.push(true);
      this.errors.push(true);
      return this;
    }
    this.rules.push(false);
    this.errors.push({
      id: 1,
      name: "Name Error",
      error: true,
      message: "Invalid name",
    });
    return this;
  }

  vAge() {
    if (this.age > 18) {
      this.rules.push(true);
      this.errors.push(true);
      return this;
    }
    this.rules.push(false);
    this.errors.push({
      id: 2,
      name: "Age Error",
      error: true,
      message: "User low age.",
    });
    return this;
  }

  verify() {
    for (let [index, rule] of this.rules.entries()) {
      if (!rule) {
        const message = this.errors[index].message;
        console.log(message);
        throw new Error(message);
      }
    }
  }
}
