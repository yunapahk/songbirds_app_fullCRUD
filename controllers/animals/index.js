const index = require("./indexRoute")
const newAnimal = require("./new")
const show = require("./show")

module.exports = {
    index,
    new: newAnimal,
    show,
    create,
    id,
    update,
    destroy
};