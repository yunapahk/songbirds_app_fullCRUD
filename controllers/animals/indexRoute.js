const Animal = require("../../models/animal")

async function index(req,res) {
    const animals = await Animal.find({})
    res.render("animal/index.ejs", {animals})
};

module.exports = index