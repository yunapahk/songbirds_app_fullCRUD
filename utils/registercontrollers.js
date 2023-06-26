const songbirdRoutes = require("../routes/songbird")

function registerControllers(app) {
    app.use("/songbird", songbirdRoutes)
}

module.exports = registerControllers