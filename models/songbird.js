const mongoose = require("./connection")

const {Schema, model} = mongoose;

const songbirdSchema = new Schema ({
    name: String,
    img: String,
    specialty: String,
})

const Songbird = model("Songbird", songbirdSchema)

module.exports = Songbird