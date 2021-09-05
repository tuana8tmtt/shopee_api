/*
*Config module
*/
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const expressHbs = require('express-handlebars');

var app = express();
/*
*Template Engine
*/
app.engine('hbs', expressHbs({
    extname: '.hbs'
}));
var hbs = expressHbs.create({});
hbs.handlebars.registerHelper('isDiscount', function (value) {
    return value > 0;
});
hbs.handlebars.registerHelper('format_number', function (value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
});
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resource/views'))

/*
*Config route
*/

app.all('*', function (req, res, next) {
    var origin = req.get('origin');
    res.header('Access-Control-Allow-Origin', origin);
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use(morgan('combined'));
require('../routes/api/keywords')(app);
require('../routes/api/products')(app);
require('../routes/api/user')(app);
require('../routes/api/shopping')(app);
require('../routes/web/search')(app);
require('../routes/web/product')(app);

app.get('/', (req, res) => {
    res.render('home')
})
app.listen(process.env.PORT || 3000, () => {
    console.log('Express server listening on port 3000')
});
