const Songbird = require("../../models/songbird")

async function create(req, res) {
    let newSongbird = {
        name: req.body.name,
        specialty: req.body.specialty,
        img: req.body.img,
    }
    const songbird = Songbird.create(newSongbird)
    console.log(newSongbird, req.body)
    res.redirect("/songbird")
}

module.exports = create
