const { Router } = require('express')
const PokemonController = require('../controllers/PokemonController')
const TreinadorController = require('../controllers/TreinadorController')
const routes = Router()

routes
    .get('/',(req,res)=>{
        console.log('Hello Mundo!')
        res.send('Equipe rocket decolando de novo!')       
    })
    .get('/pokemons', PokemonController.getAll)
    .post('/pokemon', PokemonController.insert)
    .put('/pokemons/:id', PokemonController.update)
    .delete('/pokemons/:id', PokemonController.delete)
    .get('/pokemons/:id', PokemonController.getOne)
    .get('/pokemon/nome', PokemonController.getAllByName)


module.exports = routes