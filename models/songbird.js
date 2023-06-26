const mongoose = require("./connection")

const {Schema, model} = mongoose;

const songbirdSchema = new Schema ({
    name: String,
    specialty: String,
    img: String,
})

const Songbird = model("Songbird", songbirdSchema)

module.exports = Songbird