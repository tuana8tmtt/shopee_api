var Keyword = require('../model/keywords');
var Product = require('../model/products');

module.exports = {
    get_all_keywords: async (req, res, next) => {
        try {
            const results = await Keyword.find({}, 'id keyword');
            res.json(results);
        } catch (error) {
            console.log(error.message);
        }
    },
    get_detail_keyword: async (req, res, next) => {
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