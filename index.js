const express = require('express');
var app = express();


require('./routes/api/keywords')(app);
require('./routes/api/products')(app);


app.listen(3000, function () {
    console.log('running port 3000')
})
