const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    type: {
        type: String,
        enum: ["Element", "Page", "Section"],
        required: true
    },
    group: {
        type: String,
        enum: ["Headers", "Heroes", "Sidebars", "Accordions"],
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
