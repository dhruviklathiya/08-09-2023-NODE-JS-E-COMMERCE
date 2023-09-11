const mongoose = require("mongoose");

const order_Schema = new mongoose.Schema(
    {
        email:{
            type:String,
            trim:true
        },
        order_status :{
            type:String,
            trim:true
        },
        delivery_address:{
            type:String,
            trim:true
        },
        payment_method:{
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

const order = mongoose.model("Order",order_Schema)
module.exports = order;