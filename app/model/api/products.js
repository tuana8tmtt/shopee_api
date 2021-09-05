const db_connect = require('../../database/connect');
const Schema = db_connect.mongoose.Schema;
var URLSlug = require("mongoose-slug-generator");
db_connect.mongoose.plugin(URLSlug);




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
    slug: {
        type: String,
        slug: 'name',
        //by default all hooks are enabled
        //slugOn:{ save: true, update: true, updateOne: true, updateMany: true, findOneAndUpdate: true }
    },
});
var product_model = db_connect.mongoose.model('products', product_schema);


module.exports = product_model;