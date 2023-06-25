const Songbird = require("../../models/songbird")

async function update(req, res) {
    const id = req.params.id
    let updatedSongbird = {
        name: req.body.name,
        img: req.body.img,
        specialty: req.body.specialty
    }
    await Animal.findByIdAndUpdate(id, req.body)
    res.render("/animal", {animal})
}

module.exports = update