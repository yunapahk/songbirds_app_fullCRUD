const Songbird = require("../../models/songbird")

async function index(req, res) {
    const songbirds = await Songbird.find({})
    res.render("songbird/index.ejs", {songbirds})
};

module.exports = index