const axios = require('axios');
require('dotenv').config();

module.exports = {
    search: async (req, res, next) => {
        if (!req.query.keyword) {
            res.render('search')
        } else {
            axios.get(process.env.HOST_NAME + '/api/v1.0/products?key_word=' + encodeURI(req.query.keyword) + '&limit=3&newest=0')
                .then((response) => {
                    let data = {
                        count: response.data.count,
                        data_count: 'Tìm thấy ' + response.data.count.toLocaleString('us', { minimumFractionDigits: 0, maximumFractionDigits: 0 }) + ' sản phẩm với từ khóa "' + response.data.keyword + '"',
                        keyword: response.data.keyword,
                        title: '"' + response.data.keyword + '" - Khuyến mại tháng 9',
                        items: response.data.items,
                        current_url: process.env.HOST_NAME,
                    }
                    res.render('search', data)
                })
                .catch((error) => console.log(error));
        }
    },
}