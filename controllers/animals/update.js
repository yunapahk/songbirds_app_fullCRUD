const Animal = require("../../models/animal")

async function update(req, res) {
    const id = req.params.id
    await Animal.findByIdAndUpdate(id, req.body)
    res.render("/animal", {animal})
}

module.exports = update