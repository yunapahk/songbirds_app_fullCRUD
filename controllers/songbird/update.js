const Songbird = require("../../models/songbird")

async function update(req, res) {
    const id = req.params.id
    let updatedSongbird = {
        name: req.body.name,
        specialty: req.body.specialty,
        img: req.body.img,
    }
    await Songbird.findByIdAndUpdate(id, req.body)
    res.render("/songbird", {songbird})
}

module.exports = update