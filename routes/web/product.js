/*
route users
*/
const Product = require('../../app/controller/web/product')
module.exports = function (router) {
    router.get('/product/:slug', Product.get_detail);
}