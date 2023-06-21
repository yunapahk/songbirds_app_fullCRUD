const animalRoutes = require("../routes/pokemon")

function registerControllers(app) {
    app.use("/animals", animalRoutes)
}

module.exports = registerControllers