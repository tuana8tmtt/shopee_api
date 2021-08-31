/*
route keywords
*/
module.exports = function (router) {
    const keywords_controller = require('../app/controller/keywords');
    const products_controller = require('../app/controller/products');


    router.get('/keywords', keywords_controller.get_all_keywords);

    router.get('/keywords/:id', keywords_controller.get_detail_keyword);

    router.get('/products', products_controller.get_products_from_keyword);
    router.get('/keywords/:itemid', products_controller.get_detail_product);
}