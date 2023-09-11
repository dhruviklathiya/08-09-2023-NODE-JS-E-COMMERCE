const { Cart } = require("../models");

const get_cart_by_useremail = async(email) => {
    return Cart.findOne({email});
}

const create_cart = async(reqbody) => {
    return Cart.create(reqbody);
}

const get_cart_list = async() => {
    return Cart.find();
}

const delete_cart = async(cart_id) => {
    return Cart.findByIdAndDelete(cart_id);
}

const update_cart = async(cart_id,reqbody) => {
    return Cart.findByIdAndUpdate(cart_id,{$set:reqbody});
}

module.exports = {
    get_cart_by_useremail,
    create_cart,
    get_cart_list,
    delete_cart,
    update_cart
}