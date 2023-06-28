const Songbird = require("./songbird")
const mongoose = require("./connection")
const User = require("./user")
const bcrypt = require("bcryptjs")
// const songbirds = require("./user")

const songbirdData = [

]

async function seed() {
    // await Songbird.deleteMany({})

    // const createdSongbirds = await Songbird.create(songbirds)
    // console.log(createdSongbird.length)
    // console.log(createdSongbirds[0])

    const newuser = {
        username: "yunapahk",
        password: await bcrypt.hash("cheese", await bcrypt.genSalt[10])
    }
    const user = await User.create(newuser)
    console.log(user)
}

mongoose.connection.on("open", () => {seed()})