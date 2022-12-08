const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const VeggieSchema = new Schema({
    name: { type: String, required: true, maxLength: 100 },
    desc: { type: String, required: true, maxLength: 100 },
    category: { type: String, required: true, maxLength: 100 },
    price: { type: String, required: true },
    number_in_stock: { type: Number, required: true }
})

// Export model
module.exports = mongoose.model("Vegetable", VeggieSchema);