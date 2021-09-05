const axios = require('axios');
var os = require("os");

module.exports = {
    get_detail: async (req, res, next) => {
        let url = 'http://localhost:3000/api/v1.0/product/' + encodeURI(req.params.slug);
        axios.get(url, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        })
            .then((response) => {
                let data = {
                    title: response.data.name,
                    img_cover: response.data.image,
                    nameProduct: response.data.name,
                    rating: parseFloat(response.data.C7).toFixed(1),
                    sold: response.data.sold,
                    price_before_discount: response.data.price_before_discount,
                    price: response.data.price,
                    discount: response.data.discount
                }
                res.render('product', data);
            })
            .catch((error) => console.log(error));
    },
}