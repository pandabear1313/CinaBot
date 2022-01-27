const mongoose = require('mongoose')

const PrefixSchema = mongoose.Schema({ //
    _id: {
        type: String,
        required: true
    },
    newPrefix: {
        type: String,
        default: "?",
        required: true
    }
})

const model = mongoose.model("Prefixes", PrefixSchema)

module.exports = model;