const mongoose = require('mongoose')

const ChannelIgnoreSchema = mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    isIgnored: {
        type: Boolean,
        required: true,
        default: false
    }
});

const model = mongoose.model("ChannelIgnore", ChannelIgnoreSchema);

module.exports = model; 

 