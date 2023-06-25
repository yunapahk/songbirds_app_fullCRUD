const songbird = require("../../models/songbird")

async function create(req, res) {
    let newSongbird = {
        name: req.body.name,
        img: req.body.img,
        specialty: req.body.specialty
    }
    const songbird = Songbird.create(newSongbird)
    console.log(newSongbird, req.body)
    res.redirect("/songbird")
}

module.exports = create
