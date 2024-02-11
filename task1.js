const auto = {

 model: "A5",
 category: "B",
 price: "30000",

}
const moto = Object.create(auto);

moto.sidecar = "Возможна установка";

function task1(specification){
  for (let key in specification) {
    if (specification.hasOwnProperty(key)) {
     console.log(`${key}: ${specification[key]}`)
    }
  }
}

task1(moto)
task1(auto)