require('dotenv').config();
module.exports = {
    html: async (req, res, next) => {
        data = {
            current_url: process.env.HOST_NAME,
            title: 'Thông tin tài khoản | Mua sắm online'
        }
        res.render('profile', data);
    }
}