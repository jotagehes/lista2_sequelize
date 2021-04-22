const { Pokemons } = require('../models')

class PokemonController {
    async getAll(req, res){

        try{
            const pokemons = await Pokemons.findAll()
            return res.status(200).json(pokemons)
        }catch(erro){
            return res.status(400).json({ error: erro.message })
        }
    }
    async insert(req, res){
        
        try{
            const novoPokemon = await Pokemons.create(req.body)
            return res.status(200).json(novoPokemon)
        }catch(erro){
            return res.status(400).json({ error: erro.message })
        }
    }
}

module.exports = new PokemonController()