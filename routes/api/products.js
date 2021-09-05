/*
route products
*/
require('dotenv').config()

module.exports = function (router) {
    const products_controller = require('../../app/controller/api/products');


    router.get('/api/v' + process.env.API_VERSION + '/products', products_controller.get_products_from_keyword);
    router.get('/api/v' + process.env.API_VERSION + '/products/:itemid', products_controller.get_detail_product);
    router.get('/api/v' + process.env.API_VERSION + '/product/:slug', products_controller.get_detail_product_from_slug);
}