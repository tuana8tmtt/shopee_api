const express = require('express');
var app = express();

app.use(express.json());
require('./routes/api/keywords')(app);
require('./routes/api/products')(app);
require('./routes/api/user')(app);

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log('Express server listening on port', port)
});
