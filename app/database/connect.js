const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.MONGO_CONNECTION,
    { useNewUrlParser: true, useNewUrlParser: true, useUnifiedTopology: true }
);
var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function () {

// });
module.exports = {
    mongoose: mongoose,
    db: db
}
