var Product = require('../model/products');

module.exports = {
    get_products_from_keyword: async (req, res, next) => {
        const keyword = req.query.key_word;
        try {
            const results = await Product.find({ keyword: keyword }).limit(1000);
            const quantity = await Product.count({ 'keyword': keyword })
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
        const id = req.params.id;
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