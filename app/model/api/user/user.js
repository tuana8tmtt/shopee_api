const db_connect = require('../../../database/connect');
const validator = require('validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Schema = db_connect.mongoose.Schema;


var user_schema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: value => {
            if (!validator.isEmail(value)) {
                throw new Error({ error: 'Invalid Email address' })
            }
        }
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    address: {
        type: String,
        required: true,
        minLength: 6
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    },],
    shop_follow: [{
        follow: {
            type: String,
            required: false
        }
    }, { timestamps: { createdAt: 'created_at' } }],
    shopping_ids: [{
        shopping_id: {
            type: String,
            required: false
        },
        status: {
            type: Number,
            required: false
        }
    }]

}, { timestamps: { createdAt: 'created_at' } });
user_schema.pre('save', async function (next) {
    // Hash the password before saving the user model
    const user = this
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})
user_schema.methods.generateAuthToken = async function () {
    // Generate an auth token for the user
    const user = this
    const token = jwt.sign({ _id: user._id }, process.env.JWT_KEY)
    user.tokens = user.tokens.concat({ token })
    await user.save()
    return token
}
user_schema.statics.findByCredentials = async (User, email, password) => {
    // Search for a user by email and password.
    const user = await User.findOne({ email })
    if (!user) {
        return 0;
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password)
    if (!isPasswordMatch) {
        return 0;
    }
    return user
}

var user_model = db_connect.mongoose.model('users', user_schema);


module.exports = user_model;