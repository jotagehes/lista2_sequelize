const { Router } = require('express')
const PokemonController = require('../controllers/PokemonController')
const TreinadorController = require('../controllers/TreinadorController')
const routes = Router()

routes
    .get('/',(req,res)=>{
        console.log('Hello Mundo!')
        res.send('olá povo')       
    })
    .get('/pokemons', PokemonController.getAll)
    .post('/pokemon', PokemonController.insert)


module.exports = routes