const mongoose = require("mongoose")

const videoSchema = new mongoose.Schema({
    country: {
        type: String,
        required: true,
        unique: true
    },
    videoLinks: [{
        type: String
    }]
}, { timestamps: true })

module.exports = mongoose.model("videos", videoSchema)