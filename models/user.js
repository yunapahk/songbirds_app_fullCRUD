const {model, Schema} = require("./connection")

const Songbird = new Schema({
    text: String
})

const UserSchema = new Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    // songbirds: [Songbird]
}, {timestamps: true})

const User = model("User", UserSchema)

module.exports = User
