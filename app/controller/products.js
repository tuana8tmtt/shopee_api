var Product = require('../model/products');

module.exports = {
    get_products_from_keyword: async (req, res, next) => {
        try {
            if (!req.query.key_word) {
                res.status(400).send('Required query params missing');
            }
            if (/\d/.test(req.query.limit)) {
                req.query.limit > 100 ? limit_query = 100 : limit_query = Number(req.query.limit);
            } else {
                limit_query = 100;
            }
            if (/\d/.test(req.query.newest)) {
                newest = Number(req.query.newest);
            } else {
                newest = 0;
            }
            let keyword = req.query.key_word;
            let results = await Product.find({ 'name': new RegExp(keyword, "i") })
                .limit(limit_query)
                .skip(newest * limit_query);
            let quantity = await Product.count({ 'name': new RegExp(keyword, "i") })
            res.json({
                error: null,
                keyword: keyword,
                count: quantity,
                items: results
            });
        } catch (error) {
            console.log(error.message);
        }
    },
    get_detail_product: async (req, res, next) => {
        const id = req.params.itemid;
        try {
            const results = await Keyword.findOne({ id: id });
            const quantity = await Product.count({ 'keyword': results.keyword })
            console.log(results.keyword);
            res.send({
                id: results.id,
                keyword: results.keyword,
                quantity: quantity
            });
        } catch (error) {
            console.log(error.message);
        }
    }
}