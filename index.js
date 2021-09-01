const express = require('express');
const morgan = require('morgan');
var app = express();

app.use(express.json());
app.use(morgan('combined'));
require('./routes/api/keywords')(app);
require('./routes/api/products')(app);
require('./routes/api/user')(app);

app.listen(process.env.PORT || 3000, () => {
    console.log('Express server listening on port 3000')
});
