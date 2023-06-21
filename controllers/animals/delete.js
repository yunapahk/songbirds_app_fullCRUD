const Animal = require("../../models/animal")

async function destroy(req, res) {
    const id = req.params.id
    await Animal.findByIdAndRemove(id)
    res.redirect("/animal")
}

module.exports = destroy