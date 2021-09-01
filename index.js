const express = require('express');
const morgan = require('morgan');
var app = express();
app.all('*', function (req, res, next) {
    var origin = req.get('origin');
    res.header('Access-Control-Allow-Origin', origin);
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}); `
app.use(express.json());
app.use(morgan('combined'));
require('./routes/api/keywords')(app);
require('./routes/api/products')(app);
require('./routes/api/user')(app);

app.listen(process.env.PORT || 3000, () => {
    console.log('Express server listening on port 3000')
});
