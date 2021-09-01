const express = require('express');
var app = express();

app.use(express.json());
require('./routes/api/keywords')(app);
require('./routes/api/products')(app);
require('./routes/api/user')(app);

var port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log('running port 3000')
})
