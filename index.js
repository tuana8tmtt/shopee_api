const express = require('express');
var app = express();


require('./routes/api/keywords')(app);
require('./routes/api/products')(app);

var port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log('running port 3000')
})
