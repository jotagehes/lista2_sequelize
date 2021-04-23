const {
    Pokemons
} = require('../models/')

class PokemonController {
    async getAll(req, res) {

        try {
            const todosPokemons = await Pokemons.findAll()
            return res.status(200).json(todosPokemons)
        } catch (erro) {
            return res.status(400).json({
                error: erro.message
            })
        }
    }
    async getOne(req, res){

        try {
            const umPokemons = await Pokemons.findOne()
            return res.status(200).json(umPokemons)
        } catch (erro) {
            return res.status(400).json({
                error: erro.message
            })
        }
    }
    async insert(req, res) {

        try {
            const novoPokemon = await Pokemons.create(req.body)
            return res.status(200).json(novoPokemon)
        } catch (erro) {
            return res.status(400).json({
                error: erro.message
            })
        }
    }
    async delete(req,res){
        try{
            const alvo = await Pokemons.findByPk(req.params.id)
            if(alvo){
                await alvo.destroy()
                return res.status(204).json(alvo)
            }else{
                return res.status(400).json({ mensagem: "Pessoa não encontrada"})
            }
        }catch(erro){
            return res.status(400).json({
                error: erro.message
            })
        }
    }
    async update(req,res){
        try{
            const alvo = await Pokemons.findByPk(req.params.id)
            if(alvo){
                await alvo.update(req.body)
                return res.status(204).json(alvo)
            }else{
                return res.status(400).json({ mensagem: "Pessoa não encontrada"})
            }
        }catch(erro){
            return res.status(400).json({
                error: erro.message
            })
        }
    }
}

module.exports = new PokemonController()