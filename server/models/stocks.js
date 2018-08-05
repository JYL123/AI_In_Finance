const mongoose = require('mongoose')

let stockSchema = new mongoose.Schema(
    {
        name: String,
        date: Date,
        open: Number,
        high: Number,
        low: Number,
        close: Number,
        adj_close: Number,
        volume: Number
    }
)

module.exports = mongoose.model('Stock', stockSchema)