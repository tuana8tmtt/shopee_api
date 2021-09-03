const Shopping = require('../../model/user/shopping');
const Products = require('../../model/products')
const User = require('../../model/user/user')

module.exports = {

    add_shopping: async (req, res, next) => {
        try {
            const Product = await Products.findOne({ itemid: req.body.itemid });

            if (Product) {
                data = {
                    id_client: req.user._id,
                    name: req.user.name,
                    address: req.user.address,
                    note: req.body.note,
                    itemid: req.body.itemid,
                    shopid: Product.shopid
                }
                const shopping_info = new Shopping(data)
                await shopping_info.save();
                let shopping_id = {
                    shopping_id: shopping_info._id,
                    status: 0
                }
                console.log(shopping_id);
                const User_update = User.findOneAndUpdate(
                    { _id: req.user._id },
                    { $push: { shopping_ids: shopping_id } },
                    function (error, success) {
                        if (error) {
                            console.log(error);
                        } else {
                            console.log(success);
                        }
                    }
                );


                res.status(201).json(shopping_info);
            } else {
                res.status(404).json({ error: 'Invalid Item' });
            }



            // res.status(201).json({ shopping_info })
        } catch (error) {
            res.status(400).send(error);
            console.log(error.message);
        }
    }
}

