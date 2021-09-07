/*
route users
*/
const SignIn = require('../../app/controller/web/user/signin')
module.exports = function (router) {
    router.get('/signIn', SignIn.html);
}