/*
route users
*/
const Shopping = require('../../app/controller/user/shopping')
require('dotenv').config();
const auth = require('../../app/middleware/user/auth');

module.exports = function (router) {

    router.post('/api/v' + process.env.API_VERSION + '/add_shopping', auth, Shopping.add_shopping);
}