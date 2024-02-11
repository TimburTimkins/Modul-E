const moto = {

 model: "A5",
 category: "B",
 price: "30000",
 sidecar: "Возможна установка",

}

function task2(property, specification){
  console.log(property in specification)
}

task2("size", moto)
task2("price", moto)

