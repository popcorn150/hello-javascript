// Use class Syntax to Define a Constructor Function

// Explicit constructor
class Vegetable {
  constructor(name) {
    this.name = name;
  }
}
const carrot = new Vegetable("carrot");
console.log(carrot.name); // Should display 'carrot'

// Implicit constructor
class Veggies {
  launch() {
    console.log("carrot");
  }
}
const veggie = new Veggies();
veggie.launch();
