const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const middle = express.urlencoded({ 
    extended: false,
    limit: 10000, 
    parameterLimit: 2,
 })

app.post('/upload', middle, function(req, res) {
    console.log(req.body);
});

app.listen(3000);