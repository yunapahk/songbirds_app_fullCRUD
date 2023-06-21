const Animal = require("./animal")
const mongoose = require("./connection")
const animals = require("./seedData")

async funciton seed() {
    await Animal.deleteMany({})

    const createdAnimals = await Animal.create(animals)
    console.log(createdAnimals.length)
    console.log(createdAnimals[0])
}

mongoose.connection.on("open", () => {seed()})