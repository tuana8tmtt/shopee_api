/*
route users
*/
require('dotenv').config();
const auth = require('../../app/middleware/user/auth');
module.exports = function (router) {
    const user_auth = require('../../app/auth/user');


    router.post('/api/user', user_auth.store_user);
    router.post('/api/user/login', user_auth.user_login);
    router.get('/api/user/me', auth, user_auth.get_info);
    router.get('/api/user/me/logout', auth, user_auth.logout);
    router.get('/api/user/me/logoutall', auth, user_auth.logout_all);
}