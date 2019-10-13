const express = require('express');
const app = express();
const layouts = require('express-ejs-layouts');
const db = require(`./models`)

app.set('view engine', 'ejs');

// app.use(express.urlencoded({extended: false}))

app.use(layouts);

app.get(`/`, function(req, res) {
    res.render(`home`);
})

app.use(`/results`, require(`./routes/results`))

app.listen(3010, function() {
    console.log('server running')
})