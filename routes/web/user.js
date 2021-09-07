/*
route users
*/

const Profile = require('../../app/controller/web/user/profile')
module.exports = function (router) {
    router.get('/user/profile', Profile.html);
}