const axios = require('axios');

module.exports = {
    search: async (req, res, next) => {
        if (!req.query.keyword) {
            res.render('search')
        } else {
            axios.get('https://shopee-product.herokuapp.com/api/v1.0/products?key_word=' + encodeURI(req.query.keyword) + '&limit=60&newest=0')
                .then((response) => {
                    let data = {
                        count: response.data.count,
                        data_count: 'Tìm thấy ' + response.data.count.toLocaleString('us', { minimumFractionDigits: 0, maximumFractionDigits: 0 }) + ' sản phẩm với từ khóa "' + response.data.keyword + '"',
                        keyword: response.data.keyword,
                        title: '"' + response.data.keyword + '" - Khuyến mại tháng 9',
                        items: response.data.items,
                        current_url: req.header('host'),
                    }
                    res.render('search', data)
                })
                .catch((error) => console.log(error));
        }
    },
}