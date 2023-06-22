const animalRoutes = require("../routes/animals")

function registerControllers(app) {
    app.use("/animal", animalRoutes)
}

module.exports = registerControllers