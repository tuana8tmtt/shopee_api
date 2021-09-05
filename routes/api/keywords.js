/*
route keywords
*/
require('dotenv').config()

module.exports = function (router) {
    const keywords_controller = require('../../app/controller/api/keywords');


    router.get('/api/v' + process.env.API_VERSION + '/keywords', keywords_controller.get_all_keywords);
    router.get('/api/v' + process.env.API_VERSION + '/keywords/:id', keywords_controller.get_detail_keyword);
}