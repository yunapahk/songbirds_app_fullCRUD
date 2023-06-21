const Animal = require("../../models/animal")

async function show(req, res) {
    const id = req.params.id
    const animal = await Animal.findById(id)
    res.render("animal/show.ejs", {animal})
}

module.exports = show