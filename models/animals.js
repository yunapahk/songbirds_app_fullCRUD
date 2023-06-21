const mongoose = require("./connection")

const {Schema, model} = mongoose

const animalSchema = new Schema ({

})

const Animal = model("Animal", animalSchema)

console.log(Animal)

module.exports = Animal