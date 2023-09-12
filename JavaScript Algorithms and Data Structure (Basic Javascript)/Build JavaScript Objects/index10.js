// Accessing Nested Objects
const myStorage = {
  car: {
    inside: {
      "glove box": "maps",
      "passenger seat": "crumbs",
    },
    outside: {
      trunk: "jack",
    },
  },
};

const gloveBoxContents = console.log(myStorage.car.inside["glove box"]);
