const songbirdRoutes = require("../routes/songbird")

function registerControllers(app) {
    app.use("/songbird", songbirdlRoutes)
}

module.exports = registerControllers