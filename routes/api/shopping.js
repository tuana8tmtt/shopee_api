/*
route users
*/
const Shopping = require('../../app/controller/api/user/shopping')
require('dotenv').config();
const auth = require('../../app/middleware/user/auth');

module.exports = function (router) {

    router.post('/api/v' + process.env.API_VERSION + '/add_shopping', auth, Shopping.add_shopping);
    router.get('/api/v' + process.env.API_VERSION + '/shopping/info/:shopping_id', auth, Shopping.info_shopping);
}