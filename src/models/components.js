const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    type: {
        type: String,
        enum: ["Element", "Page"],
        required: true
    },
    content: {
        html: {
            type: String,
            required: true
        },
        js: {
            type: String,
        }
    }
});

module.exports = mongoose.model("Component", schema);
