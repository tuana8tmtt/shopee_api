const express = require('express');
var app = express();

app.use(express.json());
require('./routes/api/keywords')(app);
require('./routes/api/products')(app);
require('./routes/api/user')(app);

app.listen(process.env.PORT || 5000, () => {
    console.log('Express server listening on port 5000')
});
