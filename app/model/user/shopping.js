const db_connect = require('../../database/connect');
// const validator = require('validator')
const Schema = db_connect.mongoose.Schema;


var shopping_schema = new Schema({
    id_client: {
        type: String,
        required: true,
        trim: true
    },
    itemid: {
        type: String,
        required: true,
        trim: true
    },
    shopid: {
        type: String,
        required: true,
        trim: true
    },
    amout: {
        type: String,
        require: true,
        trim: true
    },
    note: {
        type: String,
        require: false
    }
}, { timestamps: { createdAt: 'created_at' } });
// user_schema.pre('save', async function (next) {
//     // Hash the password before saving the user model
//     const user = this
//     if (user.isModified('password')) {
//         user.password = await bcrypt.hash(user.password, 8)
//     }
//     user.save();
// })


var shopping_model = db_connect.mongoose.model('shopping_logs', shopping_schema);


module.exports = shopping_model;