const mongoose = require("mongoose");

const cart_Schema = new mongoose.Schema(
    {
        email:{
            type:String,
            trim:true
        },
        total_items:{
            type:Number,
            default:0
        },
        total_price:{
            type:Number,
            default:0
        },
        coupon_code:{
            type:String,
            trim:true
        },
        is_active:{
            type:Boolean,
            default:true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const cart = mongoose.model("Cart",cart_Schema)
module.exports = cart;