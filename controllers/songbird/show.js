const Songbird = require("../../models/songbird")

async function show(req, res) {
    const id = req.params.id
    const songbird = await Songbird.findById(id)
    console.log(songbird)
    res.render("songbird/show.ejs", {songbird})
}

module.exports = show