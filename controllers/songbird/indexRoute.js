const Songbird = require("../../models/songbird")

async function index(req,res) {
    const sonbirds = await Songbird.find({})
    console.log(songbird)
    res.render("songbird/index.ejs", {songbirds})
};

module.exports = index