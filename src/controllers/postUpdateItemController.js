const Item = require("../models/item");

const postUpdateItemController = (req, res) => {
    const _id = req.params._id;
    const item = new Item({
        _id: _id,
        name: req.body.name,
        desc: req.body.desc,
        category: req.body.category,
        price: req.body.price,
        number_in_stock: req.body.number_in_stock,
    });

    Item.findOneAndUpdate({ _id: _id }, item, (err) => {
        if (err) console.log(err);
        res.redirect(`/item/${_id}`)
    })
};

module.exports = postUpdateItemController;
