const Anial = require("../../models/animal")

async function edit(req, res) {
    const id = req.params.id
    const animal = await Animal.findById(id)
    res.render("animal/edit.ejs", {animal})
}

module.exports = edit