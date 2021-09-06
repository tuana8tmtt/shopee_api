/*
route users
*/
const Home = require('../../app/controller/web/home')
module.exports = function (router) {
    router.get('/home', Home.home);
}