/*
route keywords
*/
module.exports = function (router) {
    const keywords_controller = require('../app/controller/keywords');


    router.get('/keywords', keywords_controller.get_all_keywords);

    router.get('/keywords/:id', keywords_controller.get_detail_keyword);
}