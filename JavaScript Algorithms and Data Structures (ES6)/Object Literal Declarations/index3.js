// Use getters and setters to Control Access to an Object
class Thermostat {
  constructor(fahrenheit) {
    this._fahrenheit = fahrenheit;
  }
  //getter
  get temperature() {
    return (5 / 9) * (this._fahrenheit - 32);
  }
  //setter
  set temperature(celsius) {
    return (this._fahrenheit = (celsius * 9.0) / 5 + 32);
  }
}
const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
