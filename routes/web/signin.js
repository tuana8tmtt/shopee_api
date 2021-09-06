/*
route users
*/
const SignIn = require('../../app/controller/web/signin')
module.exports = function (router) {
    router.get('/signIn', SignIn.html);
}