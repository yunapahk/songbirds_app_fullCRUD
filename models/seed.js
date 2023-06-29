const Songbird = require("./songbird")
const mongoose = require("./connection")

async function seed() {
    await Songbird.deleteMany({})

    const createdSongbirds = await Songbird.create(songbirds)
    console.log(createdSongbird.length)
    console.log(createdSongbirds[0])
}

mongoose.connection.on("open", () => {seed()})