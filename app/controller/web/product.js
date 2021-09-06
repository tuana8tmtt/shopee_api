const axios = require('axios');
var os = require("os");
require('dotenv').config();
module.exports = {
    get_detail: async (req, res, next) => {
        let url = process.env.HOST_NAME + '/api/v1.0/product/' + encodeURI(req.params.slug);
        axios.get(url, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        })
            .then((response) => {
                let list_img = JSON.parse(response.data.images.replace(/&quot;/g, '"'));
                delete list_img[0];
                let data = {
                    title: response.data.name,
                    img_cover: response.data.image,
                    nameProduct: response.data.name,
                    rating: parseFloat(response.data.C7).toFixed(1),
                    sold: response.data.sold,
                    price_before_discount: response.data.price_before_discount,
                    price: response.data.price,
                    discount: response.data.discount,
                    current_url: process.env.HOST_NAME,
                    images: list_img,
                }
                res.render('product', data);
            })
            .catch((error) => console.log(error));
    },
}