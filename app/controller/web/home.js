const axios = require('axios');
require('dotenv').config();
module.exports = {
    home: async (req, res, next) => {
        data = {
            current_url: process.env.HOST_NAME,
            title: 'Mua sắm tưng bừng tháng 9 cùng với Shopee, Lazada, Tiki'
        }
        res.render('home', data);
    }
}