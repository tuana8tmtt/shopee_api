const Shopping = require('../../../model/api/user/shopping');
const Products = require('../../../model/api/products')
const User = require('../../../model/api/user/user')
const shoppingExists = (shopping_id, arr) => {
    return arr.some(function (el) {
        return el.shopping_id === shopping_id;
    });
}
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
    },
    info_shopping: async (req, res) => {
        try {
            if (req.user.shopping_ids.length > 0) {
                if (shoppingExists(req.params.shopping_id, req.user.shopping_ids)) {
                    const Shopping_info = await Shopping.findOne({ _id: req.params.shopping_id });
                    if (Shopping_info) {
                        let status_info = req.user.shopping_ids.find(o => o.shopping_id === req.params.shopping_id);
                        data = {
                            detail: Shopping_info,
                            status: status_info.status
                        }
                        res.status(201).json(data);
                    } else {
                        res.status(404).json({ error: "Not Found" });
                    }
                } else {
                    res.status(404).json({ error: "Not Found" });
                }
            } else {
                res.status(404).json({ error: "Not Found" });
            }
        } catch (error) {
            // console.log(error);
            res.status(400).send(error);
        }

    }

}

