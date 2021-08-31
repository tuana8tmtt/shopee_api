const express = require('express');
var app = express();


require('./routes/keywords')(app);


app.listen(3000, function () {
    console.log('running port 3000')
})
