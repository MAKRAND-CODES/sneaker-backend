const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    image: String,
    brand: String
});

module.exports = mongoose.model("Product",productSchema);