class EllApp {
  constructor(name, connection) {
    this.name = name;
    this.connection = function () {
      if (connection === true) {
        console.log(`${this.name} включен`);
      } else {
        console.log(`${this.name} выключен`);
      }
    };
  }
}

class KitchenApp extends EllApp {
  constructor(color, name, connection) {
    super(name, connection);
    this.color = color;
  }
}

class BedroomApp extends EllApp {
  constructor(diagonal, name, connection) {
    super(name, connection);
    this.diagonal = diagonal;
  }
}

const fridge = new KitchenApp(color = 'Серый', name = 'Спутник', connection = true);
const tv = new BedroomApp(diagonal = '50 сантиметров', name = 'Рекорд', connection = false);

fridge.connection();
console.log(fridge);

tv.connection();
console.log(tv);