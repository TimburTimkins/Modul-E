function EllApp (name, connection) {
    this.name = name;
    this.connection = function () {
      if (connection === true) {
        console.log(`${this.name} включен`);
      } else {
        console.log(`${this.name} выключен`);
      }
    };
  }

const fridge = new EllApp('Спутник', true);
const tv = new EllApp(name = 'Рекорд', connection = false);

fridge.connection();
console.log(fridge);

tv.connection();
console.log(tv);