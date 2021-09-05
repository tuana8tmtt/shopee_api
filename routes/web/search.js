/*
route users
*/
const Search = require('../../app/controller/web/search')
module.exports = function (router) {
    router.get('/search', Search.search);
}