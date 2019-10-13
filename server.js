const express = require('express');
const app = express();
const layouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');

app.get(`/`, function(req, res) {
    res.send('HOME PAGE')
})

app.listen(3010, function() {
    console.log('server running')
})