// ALL MY REQUIRES 
const express = require('express');
const app = express();
const layouts = require('express-ejs-layouts');
const db = require(`./models`)

app.set('view engine', 'ejs');

// GOT THAT MIDEWARE BRUH! 
app.use(express.urlencoded({extended: false}))

app.use(layouts);

app.get(`/`, function(req, res) {
    res.render(`home`);
})

app.get(`/favorites`, function(req, res) {
    db.pokemon.findAll()
    .then(function(favoritesPokeStyle) {
        res.render('favorites', {topPoke: favoritesPokeStyle})
        console.log(favoritesPokeStyle)
    })
})

app.post(`/favorites`, function(req, res) {
    db.pokemon.findOrCreate({
        where : {
            name : req.body.pokeName,
        },
        defaults : {
            name : req.body.pokeName,
        }
    })
    .then(function([favorite, created]) {
        console.log(`${favorite} is ${created ? 'created' : 'already in existence'}`)
        res.redirect('/favorites')
    })
})



app.use(`/results`, require(`./routes/results`))

app.listen(3010, function() {
    console.log('server running')
})