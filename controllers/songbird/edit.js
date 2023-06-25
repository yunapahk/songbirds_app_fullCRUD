const Songbird = require("../../models/songbird")

async function edit(req, res) {
    const id = req.params.id
    const songbird = await Songbird.findById(id)
    res.render("songbird/edit.ejs", {songbird})
}

module.exports = edit