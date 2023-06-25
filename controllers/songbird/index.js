const index = require("./indexRoute")
const newSongbird = require("./new")
const show = require("./show")
const create = require("./create")
const edit = require("./edit")
const update = require("./update")
const destroy = require("./delete")

module.exports = {
    index,
    new: newSongbird,
    show,
    create,
    edit,
    update,
    destroy
};