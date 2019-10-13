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
        res.render(`result`, {pokemon : pokeResults.data})
        console.log(pokeResults.data)
    })
})

router.get(`/https://pokeapi.co/api/v2/pokemon/:id`, function(req, res) {
    axios.get(BASE_URL, {
        params : {
            id : req.params.id,
        },
    })
    .then(function(pokeresult) {
        res.render(`singleresults`, {pokemon : pokeresult})
        console.log(pokeresult)
    })
})



module.exports = router;


