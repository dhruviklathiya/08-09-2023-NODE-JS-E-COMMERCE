const mongoose = require("mongoose");

const category_Schema = new mongoose.Schema(
    {
        category_name: {
            type: String,
            trim: true
        },
        category_desc: {
            type: String,
            trim: true
        },
        is_active: {
            type: Boolean,
            default: true
        }
    },
    {
            timestamps: true,
            versionkey: false
    }
);

const category = mongoose.model("category",category_Schema);
module.exports = category;