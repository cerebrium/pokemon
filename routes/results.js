const express = require('express');
const router = express.Router();
const axios = require('axios');

const BASE_URL = 'http://pokeapi.co/api/v2/pokemon/';

router.get(`/`, function(req, res) {
    axios.get(BASE_URL, {
        params : {
            limit : req.query.limit,
            forms : req.query.forms,
            species : req.query.species,
        },

    })
    .then(function (pokeResults) {
        res.render(`results`, {pokemon : pokeResults.data})
        console.log(pokeResults.data)
    })
})

router.get(`/singleresults/:id`, function(req, res) {
    let inputHere = req.params.id;
    axios.get(`http://pokeapi.co/api/v2/pokemon/${inputHere}`, {})
    .then(function(pokeresult) {
        res.render(`singleresults`, {pokemon : pokeresult.data})
        console.log(req.params.id)
        console.log(pokeresult.data)
    })
})



module.exports = router;


