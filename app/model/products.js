const db_connect = require('../database/connect');
const Schema = db_connect.mongoose.Schema;




var product_schema = new Schema({
    id: Number,
    itemid: String,
    keyword: String,
    shopid: Number,
    name: String,
    image: String,
    images: JSON,
    sold: Number,
    view_count: Number,
    brand: String,
    item_characteristics: String,
    price: Number,
    price_before_discount: Number,
    item_rating: JSON,
    shop_location: String,
    discount: String,
});
var product_model = db_connect.mongoose.model('products', product_schema);


module.exports = product_model;