const db_connect = require('../../database/connect');
const Schema = db_connect.mongoose.Schema;


var keyword_schema = new Schema({
    id: Number,
    keyword: String,
    quantity: Number,
});
var keyword_model = db_connect.mongoose.model('keywords', keyword_schema);


module.exports = keyword_model;