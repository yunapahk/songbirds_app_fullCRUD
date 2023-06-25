const Songbird = require("../../models/asongbird")

async function destroy(req, res) {
    const id = req.params.id
    await Songbird.findByIdAndRemove(id)
    res.redirect("/songbird")
}

module.exports = destroy